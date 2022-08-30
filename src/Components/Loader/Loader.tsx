import StyledSpinner from '../Spinner/Spinner.style';

export interface ILoaderProps {
  className?: string
}

export function LoaderBase({ className }: ILoaderProps): JSX.Element {
  return (
    <div className={className}>
      <StyledSpinner size={22} />
    </div>
  );
}
