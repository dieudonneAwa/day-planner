import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/globals/GlobalStyles';
import { ResetStyles } from '../src/globals/ResetStyles';
import { theme } from '../src/globals/theme';

interface AppProps {
  pageProps: any;
  Component: any;
}

const PlannerApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default PlannerApp;
