import { IconShape } from 'react-pro-sidebar';
import Themes, { getTheme, ITheme } from '../../Themes/Themes';
import { IReducerAction } from '../../Types';
import LayoutActionTypes from './LayoutActionTypes';

export interface ILayoutStateSidebarStatus {
  hidden: boolean,
  collapsed: boolean,
}

export interface ILayoutState {
  theme: ITheme,
  sidebar: ILayoutStateSidebarStatus
  sidebarIconShape: IconShape;
}

const layoutDefaultState: ILayoutState = {
  theme: Themes.PRIMARY,
  sidebar: {
    hidden: false,
    collapsed: true,
  },
  sidebarIconShape: 'round',
};

// eslint-disable-next-line default-param-last
const LayoutReducer = (state: ILayoutState = layoutDefaultState, action: IReducerAction): any => {
  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === LayoutActionTypes.SHOW_SIDEBAR) {
    newState.sidebar.hidden = false;
    newState.sidebar.collapsed = !action.params?.uncollapsed;
    return newState;
  }
  if (action.type === LayoutActionTypes.HIDE_SIDEBAR) {
    newState.sidebar.hidden = true;
    newState.sidebar.collapsed = true;
    return newState;
  }
  if (action.type === LayoutActionTypes.COLLAPSE_SIDEBAR) {
    newState.sidebar.collapsed = true;
    return newState;
  }
  if (action.type === LayoutActionTypes.UNCOLLAPSE_SIDEBAR) {
    newState.sidebar.collapsed = false;
    return newState;
  }
  if (action.type === LayoutActionTypes.CHANGE_THEME) {
    const theme = getTheme(action.params?.themeId);
    if (theme) {
      newState.theme = theme;
    }
    return newState;
  }

  return state;
};

export default LayoutReducer;
