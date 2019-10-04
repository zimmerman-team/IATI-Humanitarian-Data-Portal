// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { ActivityListLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory / Activity List',
  () => (
    <>
      <Providers>
        <ActivityListLayout activity={mockData.activity} />
      </Providers>
    </>
  )
);
