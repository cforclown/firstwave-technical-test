import ComingSoon from '../ComingSoon/ComingSoon.style';

interface IDashboard {
  className?: string
}

export function DashboardBase({ className }: IDashboard): JSX.Element {
  return (
    <div className={className}>
      <ComingSoon />
    </div>
  );
}
