import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from 'app/Providers';
import Routes from 'app/Routes';
import AppBar from 'app/components/surfaces/AppBar';
import SnackBar from 'app/components/feedback/SnackBar';
import { Box, Container, Hidden } from '@material-ui/core';
import { DrawerMenu } from './components/navigation/Drawer';
import { mockData as drawerMockData } from './components/navigation/Drawer/mock';

/* store */
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from './state/store/hooks';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  const gbsignatoriesData = useStoreState(
    reduxstate => reduxstate.gbsignatories
  );
  if (!gbsignatoriesData.success && !gbsignatoriesData.loading) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useStoreActions(actions => actions.gbsignatories.fetch)({});
  }

  return (
    <Providers>
      <Router>
        <Hidden lgUp>
          <DrawerMenu links={drawerMockData.links} />
        </Hidden>
        <Hidden mdDown>
          <AppBar data-cy="appbar" />
        </Hidden>
        <Routes />
        <SnackBar open={props.openSnackbar} />
      </Router>
    </Providers>
  );
}

export default App;
