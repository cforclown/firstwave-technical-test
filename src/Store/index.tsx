import { combineReducers, createStore } from 'redux';
import AccessTokenReducer, { IAccessTokenState } from '../Reducers/AccessToken/AccessToken';
import LayoutReducer, { ILayoutState } from '../Reducers/Layout/Layout';
import MetadataReducer, { IMetadataState } from '../Reducers/Metadata/Metadata';

export interface IAppState {
  layout: ILayoutState,
  accessToken: IAccessTokenState,
  metadata: IMetadataState
}

const reducers = combineReducers({
  layout: LayoutReducer,
  accessToken: AccessTokenReducer,
  metadata: MetadataReducer,
});

const Store = createStore(reducers);

export default Store;
