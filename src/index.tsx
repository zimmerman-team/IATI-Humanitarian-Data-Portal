/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';

// import { setupNotification } from 'notification';
import * as serviceWorker from 'serviceWorker';
import * as _ from 'styled-components/cssprop';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// setupNotification();
