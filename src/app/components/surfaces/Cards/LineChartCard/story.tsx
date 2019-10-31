import React from 'react';
import { storiesOf } from '@storybook/react';
import { LineChartCard } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData } from 'app/components/charts/LineChart/mock';

storiesOf('Surfaces|Cards/', module).add('Line chart card', () => (
  <Providers>
    <Grid container>
      <LineChartCard
        values={mockData}
        title="Data publication aggregated signatory progress"
      />
    </Grid>
  </Providers>
));
