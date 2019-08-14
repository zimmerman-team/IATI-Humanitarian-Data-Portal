// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import Providers from 'app/Providers';
// comps
import { ActivityListLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory / Activity List',
  () => (
    <>
      <Providers>
        <ActivityListLayout
          title={mockData.title}
          subtitle={mockData.subtitle}
          activity={mockData.activity}
        />
      </Providers>
    </>
  )
);
