import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IUser {
  _id: string;
  username: string;
  fullname: string;
  email?: string | null;
  role: object;
  avatar?: {
    data: string;
    filename: string;
  }
}
export interface IAccessToken {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface IReducerAction {
  type: string,
  params: Record<string, any> | null,
}

export type SidebarSection = 'TOP' | 'MID' | 'BOTTOM'

export interface ISidebarItem {
  label: string;
  path?: string;
  icon: IconProp;
  permissions?: Record<string, string>; // [permission]: [action]
  items?: ISidebarItem[];
  section?: SidebarSection;
}

export type ISidebarDivider = 'SIDEBAR_DIVIDER'

export interface IRouteItem {
  path: string;
  name: string;
  component?: React.LazyExoticComponent<() => JSX.Element>;
}

export type BootstrapSize = 'sm' | 'md' | 'lg' | 'xl'
export type BootstrapColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'

export const BootstrapSizes: Record<string, number> = {
  sm: 20,
  md: 28,
  lg: 36,
  xl: 44,
};
