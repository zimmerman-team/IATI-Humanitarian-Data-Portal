// @ts-nocheck
// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import ProvidersPage from 'app/Providers';
// comps
import { TimelinesLayout } from './layout';
import { mockDataVar7 } from 'app/components/datadisplay/Table/mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory Data / Timeliness',
  () => (
    <>
      <ProvidersPage>
        <TimelinesLayout timelagData={mockDataVar7.data} />
      </ProvidersPage>
    </>
  )
);
