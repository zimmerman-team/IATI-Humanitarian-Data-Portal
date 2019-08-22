import React from 'react';
import { AboutLayout } from './layout';
import { mockData } from './mock';

export function About() {
  return <AboutLayout title={mockData.title} sections={mockData.sections} />;
}
