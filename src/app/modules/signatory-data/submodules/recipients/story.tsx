// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { RecipientsLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory Data / Recipients',
  () => (
    <>
      <Providers>
        <RecipientsLayout
          activity={mockData.activity}
          barChartData={mockData.barChartData}
          tableData={mockData.tableData}
        />
      </Providers>
    </>
  )
);
