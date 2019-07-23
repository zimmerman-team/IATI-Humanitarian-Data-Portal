import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Input|Buttons/', module).add('Contained Buttons', () => (
  <Providers>
    <Grid container spacing={3}>
      <Component text="Default" />

      <Component text="Primary" color="primary" />

      <Component text="Secondary" color="secondary" />

      <Component text="Disabled" color="secondary" disabled />
    </Grid>
  </Providers>
));
