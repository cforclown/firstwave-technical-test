import { useEffect, useState } from 'react';
import { IUrlEndpoint, IUseApiResponse } from './useApi';
import { getAxiosMethod } from '../Utils/callApi';

export interface IUseFetchAxios {
  endpoint: IUrlEndpoint;
  body?: any;
}

export function useFetchAxios<T>({ endpoint, body }: IUseFetchAxios): IUseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getAxiosMethod(endpoint, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  const refetch = (): void => {
    setLoading(true);
    setError(null);

    getAxiosMethod(endpoint, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data, loading, error, refetch,
  };
}
