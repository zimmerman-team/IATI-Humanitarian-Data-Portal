import React from 'react';
import { AboutLayout } from './layout';
import { mockData } from './mock';

export default function About() {
  return <AboutLayout sections={mockData.sections} title={mockData.title} />;
}
