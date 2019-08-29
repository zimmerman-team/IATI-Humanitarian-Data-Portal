import React from 'react';
import { ActivityDetailsLayout } from './layout';
import { mockData } from './mock';

export function ActivityDetails() {
  return (
    <ActivityDetailsLayout
      header={mockData.header}
      sections={mockData.sections}
      incomingTransactionsTableData={mockData.incomingTransactionsTableData}
      outgoingTransactionsTableData={mockData.outgoingTransactionsTableData}
      inPageNavigation={mockData.inPageNavigation}
      lists={mockData.lists}
    />
  );
}
