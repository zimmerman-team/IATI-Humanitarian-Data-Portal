import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaqsLayout } from './layout';
import Providers from 'app/Providers';
import { DebugBox } from 'app/utils/layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add('Page - Faqs', () => (
  <>
    <Providers>
      <DebugBox>
        <FaqsLayout questions={mockData.questions} title={mockData.title} />
      </DebugBox>
    </Providers>
  </>
));
