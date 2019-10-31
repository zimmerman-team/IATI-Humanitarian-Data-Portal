import React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalBarChart } from './index';
import Providers from 'app/Providers';
import { mockData } from './mock';

storiesOf('Charts|Bar Charts/', module).add('Horizontal Bar Chart', () => (
  //TODO: Two kinds of flavours on this component, see linechart
  <Providers>
    <HorizontalBarChart values={mockData.values} />
    <HorizontalBarChart values={mockData.values} colors="single" />
  </Providers>
));
