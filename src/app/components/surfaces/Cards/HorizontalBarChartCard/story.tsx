import React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalBarChartCard } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData } from './mock';

storiesOf('Surfaces|Cards/', module).add('Horizontal Bar Chart card', () => (
  <Providers>
    <Grid container>
      <HorizontalBarChartCard values={mockData} title={mockData.title}/>
    </Grid>
  </Providers>
));
