import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Charts|Donut Chart/', module).add('Donut Chart', () => (
  <Providers>
    <Grid container>
      <Component value={50}/>
    </Grid>
  </Providers>
));
