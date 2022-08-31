import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DataTable from '../DataTable/DataTable.style';
import { generateTableColumns } from '../DataTable/DataTableService';
import { IMetadataAction } from '../../Types/Metadata';
import { useApi } from '../../Hooks/useApi';
import Loader from '../Loader/Loader.style';
import ErrorPanel from '../ErrorPanel/ErrorPanel.style';
import { IExplorer } from './Explorer';

interface IExplore extends IExplorer{
  className?: string
}

export function ExploreBase({ resource, metadata, className }: IExplore): JSX.Element {
  const navigate = useNavigate();
  const {
    loading, data, error, refetch,
  } = useApi<any[]>({
    endpoint: metadata.endpoint,
    type: typeof metadata.endpoint === 'string' ? 'realm' : 'url',
  });
  const columns = generateTableColumns(metadata, resource._id, refetch);

  const onActionClick = (action: IMetadataAction): void => {
    navigate(`../../${resource._id}${action.path}`, { state: action, replace: true });
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPanel />;
  }

  return (
    <div id="explore" className={className}>
      <div className="explore-header">
        <div className="explore-title">
          {metadata.label.plural}
        </div>
        <div className="explore-actions">
          {metadata.actions.map((action) => (
            <Button key={action._id} variant="outline-primary mx-2" onClick={() => onActionClick(action)}>{action.label}</Button>
          ))}
        </div>
      </div>
      <div className="datatable-container">
        {
          !data || !data.length
            ? <ErrorPanel message="NO DATA AVAILABLE" />
            : <DataTable columns={columns} data={data} />
        }
      </div>
    </div>
  );
}
