import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActivityDetailsHeaderCard } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData } from './mock';

storiesOf('Surfaces|Cards/', module).add('Activity Details Header', () => (
  <Providers>
    <Grid container>
      <ActivityDetailsHeaderCard
        organisation={mockData.organisation}
        activity={mockData.activity}
      />
    </Grid>
  </Providers>
));
