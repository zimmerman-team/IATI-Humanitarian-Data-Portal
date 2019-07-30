import React from 'react';
import { storiesOf } from '@storybook/react';
import { VerticalBarChartCard } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { dataMock } from './mock';

storiesOf('Surfaces|Cards/', module).add('Vertical Bar Chart card', () => (
  <Providers>
    <Grid container>
      <VerticalBarChartCard values={dataMock} title={dataMock.title}/>
    </Grid>
  </Providers>
));
