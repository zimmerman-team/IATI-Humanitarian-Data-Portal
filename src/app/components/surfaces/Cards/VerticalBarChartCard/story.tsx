import React from 'react';
import { storiesOf } from '@storybook/react';
import { VerticalBarChartCard } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { dataMock } from 'app/components/charts/BarCharts/VerticalBarChart/mock';

storiesOf('Surfaces|Cards/', module).add('Vertical Bar Chart card', () => (
  <Providers>
    <Grid container>
      <VerticalBarChartCard
        data={dataMock.data}
        title="Activity Timeline"
        tooltip="Lorem ipsum dolor"
      />
    </Grid>
  </Providers>
));
