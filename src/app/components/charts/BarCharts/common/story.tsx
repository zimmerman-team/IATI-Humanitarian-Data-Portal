import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChartTooltip } from './index';
import Providers from 'app/Providers';
// import { mockData } from './mock'

storiesOf('Charts|Bar Charts/Common/', module).add('Chart Tooltip', () => (
  <Providers>
    <ChartTooltip items={mock}/>
  </Providers>
));

const mock = [
  {
    label: "Activities",
    value: 66,
    color: "#666666",
  },
  {
    label: "Je ma",
    value: 33,
    color: "#a23b23",
  }
];
