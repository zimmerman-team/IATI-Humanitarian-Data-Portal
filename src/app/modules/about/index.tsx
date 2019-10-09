import React from 'react';
import { AboutLayout } from 'app/modules/about/layout';
import { mockData } from 'app/modules/about/mock';

export function About() {
  return <AboutLayout title={mockData.title} sections={mockData.sections} />;
}
