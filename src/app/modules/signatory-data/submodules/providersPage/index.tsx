import React from 'react';
import { ProvidersPageLayout } from 'app/modules/signatory-data/submodules/providersPage/layout';
import { mockData } from './mock';

export function ProvidersPage() {
  return (
    <ProvidersPageLayout
      activity={mockData.activity}
      barChartData={mockData.barChartData}
      tableData={mockData.tableData}
    />
  );
}
