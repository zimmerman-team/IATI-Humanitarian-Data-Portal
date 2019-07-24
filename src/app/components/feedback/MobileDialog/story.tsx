import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Feedback|Mobile Notice/', module).add('Mobile Notice', () => (
  <Providers>
    <Grid container>
      <Component/>
    </Grid>
  </Providers>
));
