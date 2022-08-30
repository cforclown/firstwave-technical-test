import { ILayoutState, ILayoutStateSidebarStatus } from '../Reducers/Layout/Layout';
import { IAppState } from '../Store';

export const selectLayout = (state: IAppState): ILayoutState => state.layout;

export const selectSidebarState = (): (state: IAppState) => ILayoutStateSidebarStatus => (state) => selectLayout(state).sidebar;
