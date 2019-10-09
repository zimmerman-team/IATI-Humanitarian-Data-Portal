import React from 'react';
import { storiesOf } from '@storybook/react';
import { LineChart } from './index';
import Providers from 'app/Providers';
import { mockData, nivoMock } from './mock';

storiesOf('Charts|Line Chart', module).add('Line Chart', () => (
  <Providers>
    <LineChart values={mockData.values} />
    <LineChart values={mockData.values} colors="single" />
  </Providers>
));
