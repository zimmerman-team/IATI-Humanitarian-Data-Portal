import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import {listModel} from './mock';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Data Display|Lists/', module).add('List', () => (
  <Providers>
      <Component title={listModel.title} items={listModel.items}/>
  </Providers>
));
