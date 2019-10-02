import React from 'react';
import { PrivacyModuleLayout } from './layout';
import { mockData } from './mock';

export function PrivacyModule() {
  return (
    <PrivacyModuleLayout title={mockData.title} sections={mockData.sections} />
  );
}
