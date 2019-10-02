// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import Providers from 'app/Providers';
// comps
import { OutgoingLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add('Page - Signatory / Outgoing', () => (
  <>
    <Providers>
      <OutgoingLayout
        horizontalBarChartCardData={mockData.horizontalBarChartCardData}
        lists={mockData.lists}
      />
    </Providers>
  </>
));
