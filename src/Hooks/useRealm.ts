import { useEffect, useState } from 'react';
import * as Realm from 'realm-web';
import { IUseApiResponse, RealmEndpoint } from './useApi';

export interface IUseFetchRealmArgs {
  endpoint: RealmEndpoint;
  body?: any;
}

export function useFetchRealm<T>({ endpoint, body }: IUseFetchRealmArgs): IUseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<Realm.User | null>(null);

  const fetch = (loggedInUser: Realm.User): void => {
    loggedInUser.functions[endpoint](body)
      .then((response: any) => {
        setData(response);
      })
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!user) {
      const app = new Realm.App({ id: 'application-0-cncbf' });
      const credentials = Realm.Credentials.anonymous();
      app.logIn(credentials)
        .then((loggedInUser) => {
          setUser(loggedInUser);
          fetch(loggedInUser);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      fetch(user);
    }
  }, [endpoint]);

  const refetch = (): void => {
    setLoading(true);
    setError(null);

    if (!user) {
      const app = new Realm.App({ id: 'application-0-cncbf' });
      const credentials = Realm.Credentials.anonymous();
      app.logIn(credentials)
        .then((loggedInUser) => {
          setUser(loggedInUser);
          fetch(loggedInUser);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      fetch(user);
    }
  };

  return {
    data, loading, error, refetch,
  };
}
