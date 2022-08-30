import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Explore from '../../../Components/Explore/Explore.style';

import Loader from '../../../Components/Loader/Loader.style';
import Dashboard from '../../../Components/Dashboard/Dashboard.style';
import { IResource } from '../../../Types/Metadata';
import Form from '../../../Components/Form/Form.style';
import RouteParent from '../../../Components/RouteParent/RouteParent';
import Resource from '../../Resource/Resource';
import { FormEdit } from '../../../Components/Form/FormEdit';

export interface IContent {
  resource: IResource;
  className?: string;
}

export function ContentBase({ resource, className }: IContent): JSX.Element {
  const defaultPath = resource.dashboards && resource.dashboards.length ? `/${resource._id}/dashboard/${resource.dashboards[0]._id}`
    : resource.views && resource.views.length ? `/${resource._id}/explore/${resource.dashboards[0]._id}`
      : '/404';

  return (
    <div id="content" className={className}>
      <Suspense fallback={Loader}>
        <Routes>
          <Route path={resource._id} element={<RouteParent exact={[`/${resource._id}`, `/${resource._id}/`]} redirectTo={defaultPath} />}>
            <Route path="dashboard/:viewId" element={<Resource Component={Dashboard} />} />

            <Route path="explore/:viewId" element={<Resource Component={Explore} />} />

            <Route path="form/:viewId/:objectId" element={<Resource Component={FormEdit} />} />
            <Route path="form/:viewId" element={<Resource Component={Form} />} />
          </Route>
          <Route path="*" element={<Navigate replace to={defaultPath} />} />
        </Routes>
      </Suspense>
    </div>
  );
}
