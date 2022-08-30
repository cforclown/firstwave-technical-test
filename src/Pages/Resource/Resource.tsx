import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { selectResource } from '../../Selectors/DataSelector';
import { IMetadata, IResource } from '../../Types/Metadata';

export interface IResourceProps {
  Component: React.ElementType
}

export interface IResourceChildProps {
  resource: IResource;
  metadata: IMetadata;
}

function Resource({ Component }: IResourceProps): JSX.Element {
  const { viewId } = useParams();
  const resource = useSelector(selectResource());
  const metadata = resource.views.find((v) => v._id === viewId);
  if (!metadata) {
    return (
      <Navigate replace to="/404" />
    );
  }

  return <Component resource={resource} metadata={metadata} />;
}

export default Resource;
