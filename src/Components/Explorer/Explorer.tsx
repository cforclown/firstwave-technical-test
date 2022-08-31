import { IResourceChildProps } from '../../Pages/Resource/Resource';
import Explore from './Explore.style';
import RealmExplore from './RealmExplore.style';

export type IExplorer = IResourceChildProps

function Explorer({ resource, metadata }: IExplorer): JSX.Element {
  return metadata.type === 'realm' ? <RealmExplore resource={resource} metadata={metadata} /> : <Explore resource={resource} metadata={metadata} />;
}

export default Explorer;
