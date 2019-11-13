import React from 'react';
import { PrivacyModuleLayout } from 'app/modules/privacy/layout';
import { mockData } from 'app/modules/privacy/mock';

export function PrivacyModule() {
  return (
    <PrivacyModuleLayout title={mockData.title} sections={mockData.sections} />
  );
}
