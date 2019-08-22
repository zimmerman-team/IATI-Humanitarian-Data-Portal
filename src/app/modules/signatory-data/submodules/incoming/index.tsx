import React from 'react';
import { IncomingLayout } from './layout';
import { mockData } from '../outgoing/mock';

export function SignatoryIncoming() {
  return (
    <IncomingLayout
      inPageNavigation={mockData.inPageNavigation}
      activity={mockData.activity}
      horizontalBarChartCardData={mockData.horizontalBarChartCardData}
      lists={mockData.lists}
    />
  );
}
