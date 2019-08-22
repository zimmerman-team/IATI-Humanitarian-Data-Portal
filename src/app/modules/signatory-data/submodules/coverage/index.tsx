import React from 'react';
import { CoverageLayout } from './layout';
import { mockData } from './mock';

export function Coverage() {
  return (
    <CoverageLayout
      activity={mockData.activity}
      tableData={mockData.tableData}
    />
  );
}
