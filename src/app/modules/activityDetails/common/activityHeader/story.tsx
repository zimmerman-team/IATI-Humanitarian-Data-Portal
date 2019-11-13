// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { ActivityHeaderLayout } from './index';
// mock
import { mockData } from '../../mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory / Activity List Details',
  () => (
    <>
      <Providers>
        <ActivityHeaderLayout
          activity={mockData.header.activity}
          organisation={mockData.header.organisation}
        />
      </Providers>
    </>
  )
);
