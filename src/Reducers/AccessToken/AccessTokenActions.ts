import AccessTokenActionTypes from './AccessTokenActionTypes';

export interface IAccessTokenAction {
  type: string,
  param: Record<string, any> | null,
}
export function SetAccessToken(session: any): IAccessTokenAction {
  return {
    type: AccessTokenActionTypes.SET_SESSION,
    param: {
      session,
    },
  };
}
export function DeleteAccessToken(): IAccessTokenAction {
  return {
    type: AccessTokenActionTypes.DELETE_SESSION,
    param: null,
  };
}
