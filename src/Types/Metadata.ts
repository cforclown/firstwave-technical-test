import { ApiEndpoint } from '../Hooks/useApi';

export type MetadataSort = Record<string, 1 | 0>;

export type MetadataFilter = Record<string, string>;

export interface IMetadaActionConfirmation {
  title: string;
  message: string;
  acceptLabel?: string;
  cancelLabel?: string;
  successMessage?: string;
  failureMessage?: string;
}

export interface IMetadataAction {
  _id: string;
  label: string;
  path: string;
  endpoint: ApiEndpoint;
  confirmation: IMetadaActionConfirmation;
}

export interface IMetadataRowActionChild {
  _id: string;
  label: string;
  path?: string;
  fetch?: ApiEndpoint;
  endpoint: ApiEndpoint;
  confirmation?: IMetadaActionConfirmation;
}

export interface IMetadataRowAction {
  _id: string;
  label: string;
  children: IMetadataRowActionChild[];
}

export interface IMetadataFieldTypeBase {
  value: 'STRING' | 'NUMBER',
  enum?: {
    _id: string | number;
    label: string;
  }[],
  validation?: string;
  initialValue?: string | number;
  required?: boolean;
  uneditable?: boolean;
}

export interface IMetadataField {
  _id: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  type: IMetadataFieldTypeBase;
  hidden?: boolean;
}

export interface IMetadata {
  _id: string;
  type: 'default' | 'realm';
  label: {
    singular: string;
    plural: string;
  };
  sidebarHidden?: boolean;
  endpoint: ApiEndpoint;
  actions: IMetadataAction[];
  rowActions?: IMetadataRowAction;
  keyFields: string[];
  labelFields?: string[];
  defaultSort?: MetadataSort;
  defaultFilters?: MetadataFilter[];
  fields: IMetadataField[];
}

export const AggregationTypes = ['COUNT', 'MAX', 'MIN', 'SUM', 'UNIQUE'] as const;
export type AggregationType = (typeof AggregationTypes)[number];
export const isAggregationType = (type: any): type is AggregationType => AggregationTypes.includes(type);

export type Filter = Record<string, AggregationType>;

export interface IVisualization {
  type: string;
  filter: Filter;
}

export interface IDashboardTile {
  _id: string;
  endpoint: string | ApiEndpoint;
  visualization: IVisualization;
}

export interface IDashboard {
  _id: string;
  label: string;
  tiles: IDashboardTile[];
}

export interface IResource {
  _id: string;
  routes: string[];
  dashboards: IDashboard[];
  views: IMetadata[];
}
