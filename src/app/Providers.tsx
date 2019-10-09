import React, { ReactNode } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from 'app/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { appStore, persistor } from 'app/state/store';
/* todo: refactor, rather not load in "oldscool" css */
import '../index.css';
import { Client } from 'app/state/api/Client';
import { ClientContextProvider } from 'react-fetching-library';

interface ProviderProps {
  children?: ReactNode;
}

function Providers(props: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* redux store provider*/}
      <StoreProvider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ClientContextProvider client={Client}>
            {/* react router */}
            <Router>{props.children}</Router>
          </ClientContextProvider>
        </PersistGate>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default Providers;
