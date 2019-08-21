import React from 'react';
import { RecipientsLayout } from './layout';
import { mockData } from './mock';

export function Recipients() {
  return (
    <RecipientsLayout
      activity={mockData.activity}
      barChartData={mockData.barChartData}
      tableData={mockData.tableData}
    />
  );
}
