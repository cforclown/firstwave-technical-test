import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export interface RouteParentProps {
  exact: string[];
  redirectTo: string;
}
function RouteParent({ exact, redirectTo }: RouteParentProps): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (exact.includes(pathname)) {
      navigate(redirectTo, { replace: true });
    }
  }, []);

  return <Outlet />;
}

export default RouteParent;
