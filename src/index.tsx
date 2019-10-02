import React from 'react';
import { hydrate, render } from 'react-dom';
import App from 'app';
import { setupNotification } from 'notification';
import * as serviceWorker from 'serviceWorker';
import * as _ from 'styled-components/cssprop';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

if (process.env.REACT_APP_NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  /* for now just do not register the service worker*/
  serviceWorker.unregister();
  // serviceWorker.register();
}

setupNotification();
