import React from 'react';
import { Container } from '@material-ui/core';
import { OutgoingLayout } from './layout';
import { mockData } from './mock';

export function SignatoryOutgoing() {
  return (
    <OutgoingLayout
      inPageNavigation={mockData.inPageNavigation}
      activity={mockData.activity}
      horizontalBarChartCardData={mockData.horizontalBarChartCardData}
      lists={mockData.lists}
    />
  );
}
