import axios, { AxiosResponse } from 'axios';
import * as Realm from 'realm-web';
import { ApiEndpoint, IUrlEndpoint } from '../Hooks/useApi';

export const getAxiosMethod = (endpoint: IUrlEndpoint, body: any): Promise<AxiosResponse<any, any>> => {
  let callback;
  switch (endpoint.method) {
    case 'GET':
      callback = axios.get(endpoint.url);
      break;
    case 'POST':
      callback = axios.post(endpoint.url, body);
      break;
    case 'PUT':
      callback = axios.put(endpoint.url, body);
      break;
    case 'PATCH':
      callback = axios.patch(endpoint.url, body);
      break;
    case 'DELETE':
      callback = axios.delete(endpoint.url);
      break;
    default:
      callback = axios.get(endpoint.url);
      break;
  }
  return callback;
};

export interface ICallApiResponse {
  data: any;
  error: any;
}

export const callApi = async (endpoint: ApiEndpoint, body?: any): Promise<ICallApiResponse> => {
  let data;
  let error;
  try {
    data = typeof endpoint === 'string' ? await callRealm(endpoint, body) : await callAxios(endpoint, body);
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const callRealm = async (endpoint: string, body?: any): Promise<any> => {
  const app = new Realm.App({ id: 'application-0-cncbf' });
  const credentials = Realm.Credentials.anonymous();
  const user = await app.logIn(credentials);
  return user.functions[endpoint](body);
};

export const callAxios = (endpoint: IUrlEndpoint, body?: any): Promise<any> => getAxiosMethod(endpoint, body);
