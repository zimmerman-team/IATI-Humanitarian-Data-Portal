import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Input|Buttons/', module).add('Contained Buttons', () => (
  <Providers>
    <Grid container>
      <Grid item xs={6}>
        <Component text="Primary" />
      </Grid>

      <Grid item xs={6}>
        <Component text="Disabled" disabled />
      </Grid>
    </Grid>
  </Providers>
));
