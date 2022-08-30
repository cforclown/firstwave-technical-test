import { useLocation, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.style';
import { useApi } from '../../Hooks/useApi';
import Form from './Form.style';
import { IMetadataRowActionChild } from '../../Types/Metadata';
import { IResourceChildProps } from '../../Pages/Resource/Resource';

export type IFormEditProps = IResourceChildProps

export function FormEdit({ resource, metadata }: IFormEditProps): JSX.Element {
  const location = useLocation();
  const { objectId } = useParams();

  const action = location.state ? (location.state as IMetadataRowActionChild) : undefined;
  const { loading, data, error } = useApi<Record<string, any>>({ endpoint: action?.fetch ?? metadata.endpoint, type: 'realm', body: objectId });

  if (loading) {
    return <Loader />;
  }
  if (error || !data) {
    return <div>{error}</div>;
  }

  return <Form resource={resource} metadata={metadata} editData={data} action={action} />;
}
