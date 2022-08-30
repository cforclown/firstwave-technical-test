import { IAppState } from '../Store';
import { ITheme, IThemeMain } from '../Themes/Themes';

export const selectTheme = (state: IAppState): ITheme => state.layout.theme;
export const selectThemeMain = (state: IAppState): IThemeMain => {
  const theme = selectTheme(state);
  return theme.main;
};
