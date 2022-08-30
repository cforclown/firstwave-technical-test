import BaseTable, { AutoResizer, ColumnShape } from 'react-base-table';
import 'react-base-table/styles.css';

interface IDataTable {
  columns: ColumnShape[];
  data: any[];
  className?: string
}

export function DataTableBase({ columns, data, className }: IDataTable): JSX.Element {
  return (
    <div id="data-table" className={className}>
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            width={width}
            height={height}
            columns={columns}
            data={data}
          />
        )}
      </AutoResizer>
    </div>
  );
}
