import React from 'react';
import { storiesOf } from '@storybook/react';
import { MyResponsiveBar } from './index';
import Providers from 'app/Providers';
import { mockData, nivoMock } from './mock'

storiesOf('Charts|Bar Charts/', module).add('Horizontal Bar Chart', () => (
  <Providers>
    <div style={{height: '380px', width: '1000px'}}>
      <MyResponsiveBar data={mockData}/>
    </div>
  </Providers>
));
