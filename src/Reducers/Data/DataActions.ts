import { IReducerAction } from '../../Types';
import { IResource } from '../../Types/Metadata';
import ActionTypes from './DataActionTypes';

export function SetResources(resources: IResource[]): IReducerAction {
  return {
    type: ActionTypes.SET_RESOURCES,
    params: { resources },
  };
}

export function SetCurrentResource(resource: IResource): IReducerAction {
  return {
    type: ActionTypes.SET_CURRENT_RESOURCE,
    params: { resource },
  };
}
