// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { CoverageLayout } from './layout';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add('Page - Signatory / Coverage', () => (
  <>
    <Providers>
      <CoverageLayout
        activity={mockData.activity}
        tableData={mockData.tableData}
      />
    </Providers>
  </>
));
