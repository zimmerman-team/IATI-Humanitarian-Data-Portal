// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { ActivityDetailsLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory / Activity List Details',
  () => (
    <>
      <Providers>
        <ActivityDetailsLayout
          header={mockData.header}
          sections={mockData.sections}
          incomingTransactionsTableData={mockData.incomingTransactionsTableData}
          outgoingTransactionsTableData={mockData.outgoingTransactionsTableData}
          inPageNavigation={mockData.inPageNavigation}
          lists={mockData.lists}
        />
      </Providers>
    </>
  )
);
