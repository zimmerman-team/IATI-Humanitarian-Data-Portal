import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from 'app/Providers';
import { Routes } from 'app/Routes';
import AppBar from 'app/components/surfaces/AppBar';
import SnackBar from 'app/components/feedback/SnackBar';
import { Box, Container, Hidden } from '@material-ui/core';
import { DrawerMenu } from './components/navigation/Drawer';
import { mockData as drawerMockData } from './components/navigation/Drawer/mock';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  return (
    <Providers>
      <Router>
        <Hidden lgUp>
          <DrawerMenu links={drawerMockData.links} />
        </Hidden>
        <Hidden mdDown>
          <AppBar data-testid="main-navigation" />
        </Hidden>
        <Routes />
        <SnackBar open={props.openSnackbar} />
      </Router>
    </Providers>
  );
}

export default App;
