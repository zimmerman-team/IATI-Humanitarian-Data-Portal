import React, { useEffect } from 'react';
import { AboutLayout } from 'app/modules/about/layout';
import { mockData } from 'app/modules/about/mock';
import { aboutStore } from 'app/modules/about/store';

export function About() {
  const [state, actions] = aboutStore();

  useEffect(() => {
    actions.getAllItems();
  }, [actions]);
  
  return (
    <AboutLayout
      title={mockData.title}
      sections={mockData.sections}
      cmsTextBlocks={state.aboutTextBlocks}
    />
  );
}
