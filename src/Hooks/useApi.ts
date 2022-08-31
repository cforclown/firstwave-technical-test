import { useFetchAxios } from './useFetchAxios';
import { useFetchRealm } from './useFetchRealm';

export interface IUrlEndpoint {
  url: string,
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

export type RealmEndpoint = string;

export type ApiEndpoint = RealmEndpoint | IUrlEndpoint;

export interface IApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: any;
  refetch: () => void;
}

interface IUseApiArgs {
  endpoint: ApiEndpoint;
  body?: any;
  type?: 'url' | 'realm';
}

export function useApi<T>({ endpoint, body, type }: IUseApiArgs): IApiResponse<T> {
  return useFetch<T>({
    fetchHandler: type === 'realm' ? useFetchRealm : useFetchAxios,
    endpoint,
    body,
  });
}

export interface IUseFetchArgs {
  fetchHandler: any,
  endpoint: ApiEndpoint;
  body?: any;
}

export function useFetch<T>({ fetchHandler, endpoint, body }: IUseFetchArgs): IApiResponse<T> {
  return fetchHandler({ endpoint, body });
}
