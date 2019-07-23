import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Data Display|Lists/', module).add('List Item', () => (
  <Providers>
    <Component label="List Item" values={['1', '2', '3']}/>
    <Component label="List Item with tooltip" values={['1', '2', '3']} tooltip="Lorem ipsum"/>
    <Component label="List Item with coloured values" values={['1', '2', '3']}  coloured/>
  </Providers>
));
