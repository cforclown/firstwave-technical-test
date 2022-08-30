import { ThemeTypes } from '../../Themes/Themes';
import { IReducerAction } from '../../Types';
import ActionTypes from './LayoutActionTypes';

export function ChangeTheme(themeId: ThemeTypes): IReducerAction {
  return {
    type: ActionTypes.CHANGE_THEME,
    params: { theme: themeId },
  };
}

export function ShowSidebar(uncollapsed = false): IReducerAction {
  return {
    type: ActionTypes.SHOW_SIDEBAR,
    params: { uncollapsed },
  };
}

export function HideSidebar(): IReducerAction {
  return {
    type: ActionTypes.HIDE_SIDEBAR,
    params: null,
  };
}

export function CollapseSidebar(): IReducerAction {
  return {
    type: ActionTypes.COLLAPSE_SIDEBAR,
    params: null,
  };
}

export function UncollapseSidebar(): IReducerAction {
  return {
    type: ActionTypes.UNCOLLAPSE_SIDEBAR,
    params: null,
  };
}
