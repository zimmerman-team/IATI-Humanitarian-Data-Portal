import React from 'react';
import { CCTRILayout } from './layout';
import { mockData } from './mock';

export default function CCTRI() {
  return <CCTRILayout sections={mockData.sections} title={mockData.title} />;
}
