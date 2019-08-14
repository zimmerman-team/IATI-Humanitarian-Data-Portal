// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import ProvidersPage from 'app/Providers';
// comps
import { ProvidersPageLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add(
  'Page - Signatory Data / Providers',
  () => (
    <>
      <ProvidersPage>
        <ProvidersPageLayout
          activity={mockData.activity}
          barChartData={mockData.barChartData}
          tableData={mockData.tableData}
        />
      </ProvidersPage>
    </>
  )
);
