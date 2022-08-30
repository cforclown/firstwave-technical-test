import { combineReducers, createStore } from 'redux';
import AccessTokenReducer, { IAccessTokenState } from '../Reducers/AccessToken/AccessToken';
import LayoutReducer, { ILayoutState } from '../Reducers/Layout/Layout';
import DataReducer, { IDataState } from '../Reducers/Data/Data';

export interface IAppState {
  layout: ILayoutState;
  accessToken: IAccessTokenState;
  data: IDataState;
}

const reducers = combineReducers({
  layout: LayoutReducer,
  accessToken: AccessTokenReducer,
  data: DataReducer,
});

const Store = createStore(reducers);

export default Store;
