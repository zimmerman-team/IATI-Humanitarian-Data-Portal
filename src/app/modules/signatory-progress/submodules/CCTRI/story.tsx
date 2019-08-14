import React from 'react';
import { storiesOf } from '@storybook/react';
import CCTRI from './index';
import Providers from 'app/Providers';
import { DebugBox } from 'app/utils/layout';

storiesOf('Modules|Page', module).add('Page - CCTRI', () => (
  <>
    <Providers>
      <CCTRI />
    </Providers>
  </>
));
