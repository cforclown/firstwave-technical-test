import { useEffect, useState } from 'react';
import * as Realm from 'realm-web';
import { REALM_APP_ID } from '../Data/config';
import { IApiResponse, RealmEndpoint } from './useApi';

export interface IUseFetchRealmArgs {
  endpoint: RealmEndpoint;
  body?: any;
}

export function useFetchRealm<T>({ endpoint, body }: IUseFetchRealmArgs): IApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [user, setUser] = useState<Realm.User | null>(null);

  async function fetch(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
      if (!user) {
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        const loggedInUser = await app.logIn(credentials);
        setUser(loggedInUser);

        const response = await loggedInUser.functions[endpoint](body);
        setData(response);
      } else {
        const response = await user.functions[endpoint](body);
        setData(response);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
  }, [endpoint]);

  const refetch = (): void => {
    fetch();
  };

  return {
    data, loading, error, refetch,
  };
}
