import { ThemeTypes } from '../../Themes/Themes';
import { IReducerAction } from '../../Types';
import ActionTypes from './LayoutActionTypes';

export function ChangeTheme(themeId: ThemeTypes): IReducerAction {
  return {
    type: ActionTypes.CHANGE_THEME,
    param: { theme: themeId },
  };
}

export function ShowSidebar(uncollapsed = false): IReducerAction {
  return {
    type: ActionTypes.SHOW_SIDEBAR,
    param: { uncollapsed },
  };
}

export function HideSidebar(): IReducerAction {
  return {
    type: ActionTypes.HIDE_SIDEBAR,
    param: null,
  };
}

export function CollapseSidebar(): IReducerAction {
  return {
    type: ActionTypes.COLLAPSE_SIDEBAR,
    param: null,
  };
}

export function UncollapseSidebar(): IReducerAction {
  return {
    type: ActionTypes.UNCOLLAPSE_SIDEBAR,
    param: null,
  };
}
