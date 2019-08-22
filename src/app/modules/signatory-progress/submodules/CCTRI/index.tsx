import React from 'react';
import { CCTRILayout } from './layout';
import { mockData } from './mock';

export function CCTRI() {
  return <CCTRILayout sections={mockData.sections} title={mockData.title} />;
}
