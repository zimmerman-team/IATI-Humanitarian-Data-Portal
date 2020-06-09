import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import Providers from 'app/Providers';
import { Routes } from 'app/Routes';
import AppBar from 'app/components/surfaces/AppBar';
import SnackBar from 'app/components/feedback/SnackBar';
import { Hidden } from '@material-ui/core';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData as drawerMockData } from 'app/components/navigation/Drawer/mock';
import { CookieDialog } from 'app/components/feedback/SnackBar/CookieDialog';
import { getCookie } from 'app/utils/generic';
import ScrollToTop from 'app/utils/scrollToTop';
import GAListener from './GAlistener';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  React.useEffect(() => {
    if (getCookie('cookieNotice')) {
      ReactGA.initialize('UA-6109435-18');
    }
  }, []);

  return (
    <Providers>
      <Router>
        <GAListener trackingId="UA-6109435-18">
          <ScrollToTop />
          <Hidden mdUp>
            <DrawerMenu links={drawerMockData.links} />
          </Hidden>
          <Hidden smDown>
            <AppBar data-testid="main-navigation" />
          </Hidden>
          <Routes />
          <SnackBar open={props.openSnackbar} />
          <CookieDialog
            data-testid="cookie-dialog"
            message="The website uses cookies for tracking statistics. Read Grand Bargains data privacy for more details."
            open
          />
        </GAListener>
      </Router>
    </Providers>
  );
}

export default App;
