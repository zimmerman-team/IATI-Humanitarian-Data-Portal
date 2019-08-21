import React from 'react';
import { ActivityListDetailsLayout } from './layout';
import { mockData } from './mock';

export function ActivityListDetails() {
  return (
    <ActivityListDetailsLayout
      header={mockData.header}
      sections={mockData.sections}
      incomingTransactionsTableData={mockData.incomingTransactionsTableData}
      outgoingTransactionsTableData={mockData.outgoingTransactionsTableData}
      inPageNavigation={mockData.inPageNavigation}
      lists={mockData.lists}
    />
  );
}
