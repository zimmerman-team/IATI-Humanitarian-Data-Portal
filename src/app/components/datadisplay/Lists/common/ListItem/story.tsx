import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Data Display|Lists/', module).add('List Item', () => (
  <Providers>
    <Component label="List Item" values={[{ qtc: '1' }]} />
    <Component
      label="List Item with tooltip"
      values={[{ qtc: '1' }]}
      tooltip="Lorem ipsum"
    />
    <Component label="List Item with coloured values" values={[{ qtc: '1' }]} />
  </Providers>
));
