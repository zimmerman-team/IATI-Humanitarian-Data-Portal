// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import Providers from 'app/Providers';
// comps
import { IncomingLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add('Page - Signatory / Incoming', () => (
  <>
    <Providers>
      <IncomingLayout
        horizontalBarChartCardData={mockData.horizontalBarChartCardData}
        activity={mockData.activity}
        inPageNavigation={mockData.inPageNavigation}
        lists={mockData.lists}
      />
    </Providers>
  </>
));
