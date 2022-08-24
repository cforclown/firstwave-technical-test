export interface ISort {
  id: string;
  order: 'ASC' | 'DESC'
}

export interface IField {
  id: string;
  label: string;
  type: {
    value: string;
  }
}

export interface IMetadata {
  id: string;
  sorts: ISort[];
  fields: IField[];
}
