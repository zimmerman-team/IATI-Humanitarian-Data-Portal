// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import ProvidersPage from 'app/Providers';
// comps
import { TimelinesLayout } from './layout';

storiesOf('Modules|Page', module).add(
  'Page - Signatory Data / Timelines',
  () => (
    <>
      <ProvidersPage>
        <TimelinesLayout />
      </ProvidersPage>
    </>
  )
);
