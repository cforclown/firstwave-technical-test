import { Fragment } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IMetadataRowActionChild, IMetadataRowAction, IMetadata } from '../../Types/Metadata';
import { callApi } from '../../Utils/callApi';
import { generateRoutePath } from '../../Utils/Common';

export interface IRowActionProps {
  rowActions: IMetadataRowAction;
  resourceId: string;
  metadata: IMetadata;
  refetchData?: ()=>void;
  rowData: any;
}

function RowAction({
  rowActions,
  resourceId,
  metadata,
  rowData,
  refetchData: refetch,
}: IRowActionProps): React.ReactElement {
  const navigate = useNavigate();
  const onActionClick = (action: IMetadataRowActionChild): void => {
    if (action.path) {
      navigate(generateRoutePath(resourceId, action.path, rowData, '../../'), { state: action, replace: true });
      return;
    }

    Swal.fire({
      title: action.confirmation?.message ?? 'Are you sure?',
      showCancelButton: true,
      cancelButtonText: action.confirmation?.cancelLabel ?? 'No',
      confirmButtonText: action.confirmation?.acceptLabel ?? 'Yes',
      preConfirm: async () => callApi(
        action.endpoint ?? metadata.endpoint,
        rowData,
      ).then(({ error }) => error).catch((error) => error),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(action.confirmation?.successMessage ?? 'Success!', '', 'success');
        if (refetch) {
          refetch();
        }
      } else if (result.isDenied) {
        Swal.fire(action.confirmation?.failureMessage ?? 'Failed!', '', 'info');
      }
    });
  };

  return (
    <DropdownButton id="dropdown-basic-button" title="Actions">
      {rowActions.children.map((action, index) => (
        <Fragment key={index}>
          <Dropdown.Item onClick={() => onActionClick(action)}>{action.label}</Dropdown.Item>
          {index !== rowActions.children.length - 1 && <Dropdown.Divider />}
        </Fragment>
      ))}
    </DropdownButton>
  );
}

export default RowAction;
