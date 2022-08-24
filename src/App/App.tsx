import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { IAppState } from '../Store';
import Home from '../Pages/Home/Home.style';
import { ITheme } from '../Themes/Themes';

interface IApp {
  className?: string;
}

export const AppBase = ({ className }: IApp): React.ReactElement => {
  const theme = useSelector<IAppState>((state) => state.layout.theme) as ITheme;

  return (
    <ThemeProvider theme={theme}>
      <div className={className}>
        <Home />
      </div>
    </ThemeProvider>
  );
};
