import React from 'react';
import { storiesOf } from '@storybook/react';
import { VerticalBarChart } from './index';
import Providers from 'app/Providers';
import { dataMock } from './mock';

storiesOf('Charts|Bar Charts/', module).add('Vertical Bar Chart', () => (
  <Providers>
    <VerticalBarChart data={dataMock} />
  </Providers>
));
