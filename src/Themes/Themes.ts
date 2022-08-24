import sidebarPrimaryBg from '../assets/images/sidebar-bg-2.jpg';

export enum ThemeTypes {
  PRIMARY = 'PRIMARY',
  LIGHT = 'LIGHT',
  DARK ='DARK',
  RED ='RED',
  PURPLE = 'PURPLE',
}

export interface IThemeSidebar {
  background: string;
  iconWrapper?: string; // color
  color: string;
  img?: string;
}

export interface IThemeHeader {
  background: string;
  color: string;
}

export interface ITheme {
  id: ThemeTypes;
  body: string;
  text: string;
  border: string;
  sidebar: IThemeSidebar
  header: IThemeHeader
}

export const primaryTheme: ITheme = {
  id: ThemeTypes.PRIMARY,
  body: '#fff',
  text: '#3d3d3d',
  border: '#ced6e0',
  sidebar: {
    background: '#222f3e',
    iconWrapper: '#3d3d3d',
    color: 'white',
    // img: sidebarPrimaryBg,
  },
  header: {
    background: '#f53b57',
    color: '#ffffff',
  },
};

export const lightTheme: ITheme = {
  id: ThemeTypes.LIGHT,
  body: '#fff',
  text: '#3d3d3d',
  border: '#ced6e0',
  sidebar: {
    background: '#2f3542',
    color: '#f1f2f6',
  },
  header: {
    background: '#a4b0be',
    color: '#3d3d3d',
  },
};

export const darkTheme: ITheme = {
  id: ThemeTypes.DARK,
  body: '#2f3542',
  text: '#f1f2f6',
  border: '#747d8c',
  sidebar: {
    background: '#3d3d3d',
    color: '#f1f2f6',
  },
  header: {
    background: '#3d3d3d',
    color: '#3d3d3d',
  },
};

export const redTheme: ITheme = {
  id: ThemeTypes.RED,
  body: '#fff',
  text: '#3d3d3d',
  border: '#ced6e0',
  sidebar: {
    background: '#f53b57',
    color: '#f1f2f6',
  },
  header: {
    background: '#ef5777',
    color: '#3d3d3d',
  },
};

export const purpleTheme: ITheme = {
  id: ThemeTypes.PURPLE,
  body: '#8854d0',
  text: '#3d3d3d',
  border: '#ced6e0',
  sidebar: {
    background: '#8854d0',
    color: '#f1f2f6',
  },
  header: {
    background: '#a55eea',
    color: '#3d3d3d',
  },
};

const Themes: Record<ThemeTypes, ITheme> = {
  [ThemeTypes.PRIMARY]: primaryTheme,
  [ThemeTypes.LIGHT]: lightTheme,
  [ThemeTypes.DARK]: darkTheme,
  [ThemeTypes.RED]: redTheme,
  [ThemeTypes.PURPLE]: purpleTheme,
};

export const getTheme = (themeId: ThemeTypes): ITheme => Themes[themeId];

export default Themes;
