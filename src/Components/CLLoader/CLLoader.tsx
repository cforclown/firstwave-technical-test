import { BootstrapSize } from '../../Types';
import CLSpinner from '../CLSpinner/CLSpinner.style';

interface ICLLoader {
  size?: BootstrapSize;
  className?: string
}

export function CLLoaderBase({ className }: ICLLoader): JSX.Element {
  return (
    <div className={className}>
      <CLSpinner size="md" />
    </div>
  );
}
