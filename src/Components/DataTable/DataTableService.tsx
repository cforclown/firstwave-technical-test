import { Column, ColumnShape } from 'react-base-table';
import { IMetadata, IMetadataRowAction } from '../../Types/Metadata';
import RowAction from './DataTableRowActionColumn';

export const generateTableColumns = (metadata: IMetadata, resourceId: string, refetchData?: () => void): ColumnShape[] => {
  const columns: ColumnShape[] = metadata.fields.map((field) => ({
    key: field._id,
    title: field.label,
    dataKey: field._id,
    width: 200,
    resizable: true,
    // sortable: true,
    align: field.align ? field.align : field.type.value === 'NUMBER' ? Column.Alignment.RIGHT : Column.Alignment.CENTER,
    frozen: Column.FrozenDirection.NONE,
    headerClassName: 'datatable-header',
  }));

  if (metadata.rowActions) {
    columns.push(generateRowActionColumn(metadata.rowActions, metadata, resourceId, refetchData));
  }

  return columns;
};

export const generateRowActionColumn = (rowActions: IMetadataRowAction, metadata: IMetadata, resourceId: string, refetchData?: () => void): ColumnShape => ({
  key: `${metadata._id}-action`,
  title: 'Actions',
  dataKey: `${metadata._id}-action`,
  width: 200,
  resizable: true,
  // sortable: true,
  align: Column.Alignment.CENTER,
  frozen: Column.FrozenDirection.RIGHT,
  cellRenderer: ({ rowData }) => (<RowAction rowActions={rowActions} rowData={rowData} resourceId={resourceId} metadata={metadata} refetchData={refetchData} />),
});
