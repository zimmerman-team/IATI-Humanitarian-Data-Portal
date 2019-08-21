import React from 'react';
import { CoverageLayout } from './layout';
import { mockData } from './mock';

export function SignatoryCoverage() {
  return (
    <CoverageLayout
      activity={mockData.activity}
      tableData={mockData.tableData}
    />
  );
}
