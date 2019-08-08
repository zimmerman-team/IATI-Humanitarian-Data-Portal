import React from 'react';
import { FaqsLayout } from './layout';
import { mockData } from './mock';

//TODO: replace with real data
export default function Faqs() {
  return <FaqsLayout questions={mockData.questions} title={mockData.title} />;
}
