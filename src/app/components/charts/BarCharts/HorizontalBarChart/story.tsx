import React from 'react';
import { storiesOf } from '@storybook/react';
import { MyResponsiveBar } from './index';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';
import { mockData, nivoMock } from './mock'

storiesOf('Charts|Bar Charts/', module).add('Horizontal Bar Chart', () => (
  <Providers>
    <div style={{height: '1000px', width: '1000px'}}>
      <MyResponsiveBar data={nivoMock}/>
    </div>
  </Providers>
));
