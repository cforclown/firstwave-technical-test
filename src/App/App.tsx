import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home.style';
import { selectTheme } from '../Selectors/ThemeSelector';
import Loader from '../Components/Loader/Loader.style';
import Page404 from '../Pages/404/Page404.style';

interface IApp {
  className?: string;
}

export const AppBase = ({ className }: IApp): React.ReactElement => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className={className}>
        <Suspense fallback={Loader}>
          <Routes>
            <Route key="home" path="*" element={<Home />} />
            <Route key="404" path="/404" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};
