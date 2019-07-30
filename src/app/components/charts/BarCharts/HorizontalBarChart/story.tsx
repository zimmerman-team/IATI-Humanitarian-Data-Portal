import React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalBarChart } from './index';
import Providers from 'app/Providers';
import { mockData } from './mock'

storiesOf('Charts|Bar Charts/', module).add('Horizontal Bar Chart', () => (
  <Providers>
      <HorizontalBarChart data={mockData}/>
  </Providers>
));
