import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import mockData from './mock';

storiesOf('Surfaces|Expansion Panel/', module).add('Expansion Panel', () => (
  <Providers>
    <Grid container style={{backgroundColor: "#ebebeb"}}>
      <Component questions={mockData.questions}/>
    </Grid>
  </Providers>
));
