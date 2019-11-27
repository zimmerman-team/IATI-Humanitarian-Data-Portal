import React from 'react';
import sortBy from 'lodash/sortBy';
import { FaqsLayout } from 'app/modules/faqs/layout';
import { faqStore } from 'app/modules/faqs/store';

export function Faqs() {
  const [state, actions] = faqStore();

  React.useEffect(() => {
    actions.getAllItems();
  }, []);

  return (
    <FaqsLayout
      faqItems={sortBy(state.faqItems, item =>
        parseInt(item.title.substring(0, item.title.indexOf('.')), 10)
      )}
      title="FAQs"
    />
  );
}
