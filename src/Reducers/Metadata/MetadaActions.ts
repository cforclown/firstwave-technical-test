import { IReducerAction } from '../../Types';
import { IMetadata } from '../../Types/Metadata';
import ActionTypes from './MetadataActionTypes';

export function SetViews(views: IMetadata[]): IReducerAction {
  return {
    type: ActionTypes.SET_VIEWS,
    param: { views },
  };
}
