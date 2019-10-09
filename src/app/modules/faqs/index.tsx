import React, { useEffect } from 'react';
import { FaqsLayout } from 'app/modules/faqs/layout';
// import { mockData } from './mock';
import { faqStore } from 'app/modules/faqs/store';

//TODO: replace with real data
export function Faqs() {
  const [state, actions] = faqStore();

  // this loads on component did mount
  useEffect(() => {
    actions.getAllItems();
  }, []);

  return <FaqsLayout faqItems={state.faqItems} title="FAQ" />;
}
