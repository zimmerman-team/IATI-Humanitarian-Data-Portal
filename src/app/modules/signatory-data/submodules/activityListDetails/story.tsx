// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import Providers from 'app/Providers';
// comps
import { ActivityListDetailsLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory / Activity List Details',
  () => (
    <>
      <Providers>
        <ActivityListDetailsLayout
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
