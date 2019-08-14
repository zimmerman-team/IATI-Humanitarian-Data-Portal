import React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalBarChartCard } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { horizontalBarChartMockData } from './mock';

storiesOf('Surfaces|Cards/', module).add('Horizontal Bar Chart card', () => (
  <Providers>
    <Grid container>
      <HorizontalBarChartCard values={horizontalBarChartMockData} title={horizontalBarChartMockData.title}/>
    </Grid>
  </Providers>
));
