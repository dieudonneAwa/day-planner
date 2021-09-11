import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/globals/GlobalStyles';
import { ResetStyles } from '../src/globals/ResetStyles';
import { theme } from '../src/globals/theme';
import { storeInitialState, useStore } from '../src/redux/store';

interface AppProps {
  pageProps: any;
  Component: any;
}

const PlannerApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { store, persistor } = useStore(storeInitialState);

  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default PlannerApp;
