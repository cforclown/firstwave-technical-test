import styled from 'styled-components';
import { DataTableBase } from './DataTable';

const DataTable = styled(DataTableBase)`
  width: 100%;
  height: 100%;

  .datatable-header {
    text-align: center !important;
    justify-content: center;
    border-right: 1px solid #9a9a9a66;
    border-left: 1px solid #9a9a9a66;
  }

  .dropdown > .dropdown-menu.show {
    position: fixed !important;
    font-size: 13px;
    min-width: 8rem;
  }
  .dropdown > .dropdown-item {
    padding: 0;
  }
  .dropdown > .btn {
    padding: 0.2rem 0.6rem;
    font-size: 13px;
    border-radius: 4px;
  }
  .dropdown-toggle::after {
    margin-left: 0.6rem;
  }
`;
DataTable.displayName = 'DataTable';

export default DataTable;
