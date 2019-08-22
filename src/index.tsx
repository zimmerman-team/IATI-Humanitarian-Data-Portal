import React from 'react';
import { hydrate, render } from 'react-dom';
import App from 'app';
import { setupNotification } from './notification';
import * as serviceWorker from 'serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement != null) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

if (process.env.REACT_APP_NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}

setupNotification();
