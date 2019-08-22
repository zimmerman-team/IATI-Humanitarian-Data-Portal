import React from 'react';
import { ActivityListLayout } from './layout';
import { mockData } from './mock';

export function ActivityList() {
  return (
    <ActivityListLayout
      title={mockData.title}
      subtitle={mockData.subtitle}
      activity={mockData.activity}
    />
  );
}
