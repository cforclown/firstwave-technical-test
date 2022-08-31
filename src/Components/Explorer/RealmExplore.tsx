import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import DataTable from '../DataTable/DataTable.style';
import { generateTableColumns } from '../DataTable/DataTableService';
import { IMetadataAction } from '../../Types/Metadata';
import Loader from '../Loader/Loader.style';
import ErrorPanel from '../ErrorPanel/ErrorPanel.style';
import { useRealm } from '../../Hooks/useRealm';
import { CONTACTS_OBJECT } from '../../Data/Realm/Contacts';
import { IExplorer } from './Explorer';

const generateLabelFields = (labelFields: string[]): string => labelFields.map((f) => `{{${f}}}`).join(' ');

interface IExplore extends IExplorer{
  className?: string
}

export function RealmExploreBase({ resource, metadata, className }: IExplore): JSX.Element {
  const navigate = useNavigate();

  const {
    loading,
    data,
    error,
    queueEvent,
    clearEvents,
    refetch,
  } = useRealm(CONTACTS_OBJECT, metadata.labelFields ? generateLabelFields(metadata.labelFields) : undefined);

  useEffect(() => {
    if (queueEvent) {
      toast.info(queueEvent);
      clearEvents();
      refetch();
    }
  }, [queueEvent]);

  const columns = generateTableColumns(metadata, resource._id);

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
