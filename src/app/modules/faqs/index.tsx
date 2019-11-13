import React, { useEffect } from 'react';
import { FaqsLayout } from 'app/modules/faqs/layout';
import { faqStore } from 'app/modules/faqs/store';

export function Faqs() {
  const [state, actions] = faqStore();

  useEffect(() => {
    actions.getAllItems();
  }, []);

  return <FaqsLayout faqItems={state.faqItems} title="FAQ" />;
}
