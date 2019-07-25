import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

const mockData = {
  activity: "Hum. activities with UN HRP codes",
  value: 76
};

storiesOf('Surfaces|Cards/', module).add('Donut Chart Card', () => (
  <Providers>
    <Grid container>
      <Component value={mockData.value} activity={mockData.activity}/>
    </Grid>
  </Providers>
));
