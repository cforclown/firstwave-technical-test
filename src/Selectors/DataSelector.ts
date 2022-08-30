import { IAppState } from '../Store';
import { IResource } from '../Types/Metadata';

export const selectResources = (state: IAppState): IResource[] => state.data.resources;
export const selectResource = (): (state: IAppState) => IResource => (state: IAppState): IResource => state.data.currentResource;
