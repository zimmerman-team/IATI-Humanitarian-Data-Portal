import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData } from './mock'

storiesOf('Input|Buttons/', module).add('Contained Buttons', () => (
  <Providers>
    <Grid container>
      <Component values={mockData.values}/>
    </Grid>
  </Providers>
));
