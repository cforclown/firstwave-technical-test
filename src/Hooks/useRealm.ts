import Mustache from 'mustache';
import { clone } from 'ramda';
import { useEffect, useRef, useState } from 'react';
import * as Realm from 'realm-web';
import { DB_NAME, MONGO_CLUSTER_NAME, REALM_APP_ID } from '../Data/config';

const {
  BSON: { ObjectId },
} = Realm;

export interface IUseRealm {
  loading: boolean;
  data: any;
  error: any;
}

export interface IUserRealmArgs<T> {
  loading: boolean;
  error: any;
  data: any[] | null;
  previousData: any[] | null;
  queueEvent: string | null;
  clearEvents: () => void;

  refetch: () => Promise<void>;
  // fetch: () => Promise<T[]>;
  getDocument: (documentId: string) => Promise<T>;
  insertDocument: (payload: Record<string, any>) => Promise<void>;
  updateDocument: (payload: {
    _id: string | Realm.BSON.ObjectId;
    [field: string]: any
  }) => Promise<void>;
  deleteDocument: (documentId: string | Realm.BSON.ObjectId) => Promise<void>;
}

export function useRealm<T>(objectName: string, eventStringTemplate?: string): IUserRealmArgs<T> {
  const [data, setData] = useState<any[] | null>(null);
  const [previousData, setPreviousData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [queueEvent, setQueueEvent] = useState<string | null>(null);

  const iApp = useRef<Realm.App | null>(null);
  const iUser = useRef<Realm.User | null>(null);
  const iCollection = useRef<any>(null);

  async function onDidmount(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
      await init();
      await refetch();
      watch()
        .then(
          // eslint-disable-next-line no-console
          () => console.log('Wacth complete'),
        )
        .catch(
          // eslint-disable-next-line no-console
          () => console.error('Wacth for collection error'),
        );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function init(): Promise<Realm.App> {
    const app = new Realm.App({ id: REALM_APP_ID });
    const user = await app.logIn(Realm.Credentials.anonymous());
    const mongo = user.mongoClient(MONGO_CLUSTER_NAME);
    const collection = mongo.db(DB_NAME).collection(objectName);
    iApp.current = app;
    iUser.current = user;
    iCollection.current = collection;
    return app;
  }

  async function watch(): Promise<void> {
    // eslint-disable-next-line no-restricted-syntax
    for await (const change of iCollection.current.watch()) {
      let breakAsyncIterator = false;
      if (change.operationType in EventNames) {
        setQueueEvent(
          `${
            EventNames[change.operationType]
          } ${
            eventStringTemplate && change.fullDocument ? Mustache.render(eventStringTemplate, change.fullDocument) : ''
          }`,
        );
        breakAsyncIterator = true;
      }
      if (breakAsyncIterator) {
        break;
      }
    }
  }

  function clearEvent(): void {
    setQueueEvent(null);
    watch();
  }

  useEffect(() => {
    onDidmount();
  }, []);

  async function refetch(): Promise<void> {
    setLoading(true);
    await fetch();
    setLoading(false);
  }

  // FETCH (get all)
  async function fetch(): Promise<any[]> {
    if (!iApp.current) {
      await init();
    }
    const documents = await iCollection.current.find({});
    setPreviousData(clone(data));
    setData(documents);
    return documents;
  }

  // GET
  async function getDocument(documentId: string | Realm.BSON.ObjectId): Promise<T> {
    setLoading(true);
    if (!iCollection.current) {
      await init();
    }
    const document = await iCollection.current.findOne({ _id: documentId });
    setLoading(false);

    return document;
  }

  // INSERT
  async function insertDocument(payload: Record<string, any>): Promise<void> {
    setLoading(true);
    if (!iCollection.current) {
      await init();
    }
    await iCollection.current.create({
      _id: new Realm.BSON.ObjectID(),
      ...payload,
    });
    setLoading(false);
  }

  // DELETE
  async function updateDocument(payload: {
    _id: string | Realm.BSON.ObjectId;
    [field: string]: any
  }): Promise<void> {
    setLoading(true);
    if (!iCollection.current) {
      await init();
    }
    const { _id, ...fields } = payload;
    await iCollection.current.updateOne(
      { _id: typeof _id === 'string' ? new Realm.BSON.ObjectID(_id) : _id },
      fields,
    );
    setLoading(false);
  }

  async function deleteDocument(documentId: string | Realm.BSON.ObjectId): Promise<void> {
    setLoading(true);
    if (!iCollection.current) {
      await init();
    }
    await iCollection.current.deleteOne({ _id: typeof documentId === 'string' ? new Realm.BSON.ObjectID(documentId) : documentId });
    setLoading(false);
  }

  return {
    loading,
    error,
    data,
    previousData,
    queueEvent,
    clearEvents: clearEvent,
    refetch,
    getDocument,
    insertDocument,
    updateDocument,
    deleteDocument,
  };
}

const EventNames: Record<string, string> = {
  insert: 'New item:',
  update: 'An item has been changed:',
  replace: 'An item has been replaced:',
  delete: 'An item has been deleted',
};
