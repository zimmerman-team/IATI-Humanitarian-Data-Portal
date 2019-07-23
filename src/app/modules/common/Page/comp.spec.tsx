import React from 'app/modules/common/Page/node_modules/react';
import ReactDOM from 'app/modules/common/Page/node_modules/react-dom';
import Page from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
  ReactDOM.unmountComponentAtNode(div);
});
