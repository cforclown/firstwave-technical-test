import MetadataActionTypes from './MetadataActionTypes';
import { IMetadata } from '../../Types/Metadata';
import { IReducerAction } from '../../Types';

export interface IMetadataState {
  views: IMetadata[];
  visualizations: any[];
  sorts: any[];
  filters: any[];
}

const metadataInitialState = {
  views: [],
  visualizations: [],
  sorts: [],
  filters: [],
};

// eslint-disable-next-line default-param-last
const MetadataReducer = (state: IMetadataState = metadataInitialState, action: IReducerAction): any => {
  if (action.type === MetadataActionTypes.SET_VIEWS) {
    return {
      ...state,
      views: action.param?.views,
    };
  }

  return state;
};

export default MetadataReducer;
