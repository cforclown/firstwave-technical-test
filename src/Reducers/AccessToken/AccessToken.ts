import { IAccessToken, IReducerAction } from '../../Types';
import AccessTokenActionTypes from './AccessTokenActionTypes';

export interface IAccessTokenState {
  session?: IAccessToken | null,
}

export const accessTokenInitialState: IAccessTokenState = {
  session: null,
};

// eslint-disable-next-line default-param-last
const Reducer = (state: IAccessTokenState = accessTokenInitialState, action: IReducerAction): unknown => {
  if (action.type === AccessTokenActionTypes.SET_SESSION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.session = action.params?.session;
    return newState;
  }
  if (action.type === AccessTokenActionTypes.DELETE_SESSION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.session = null;
    return newState;
  }

  return state;
};

export default Reducer;
