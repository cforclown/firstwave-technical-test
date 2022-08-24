import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CLLoader from '../../../Components/CLLoader/CLLoader.style';
import CLSpinner from '../../../Components/CLSpinner/CLSpinner.style';
import routes from '../Routes';

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
`;

export const Loader = (
  <LoaderContainer>
    <CLSpinner size="md" />
  </LoaderContainer>
);

export function ContentBase({ className }: {className?: string}): JSX.Element {
  return (
    <div className={className}>
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          {/* {routes.filter((r) => !!r.component).map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))} */}
        </Routes>
      </Suspense>
    </div>
  );
}
