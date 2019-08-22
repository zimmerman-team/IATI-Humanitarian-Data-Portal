import React, { useEffect } from 'react';
import { FaqsLayout } from './layout';
// import { mockData } from './mock';
import { faqStore } from './store';

//TODO: replace with real data
export function Faqs() {
  const [state, actions] = faqStore();

  // this loads on component did mount
  useEffect(() => {
    actions.getAllItems();
  }, []);

  return <FaqsLayout faqItems={state.faqItems} title="FAQ" />;
}
