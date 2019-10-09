import React from 'react';
import { storiesOf } from '@storybook/react';
import { CCTRI } from './index';
import Providers from 'app/Providers';

storiesOf('Modules|Page', module).add('Page - CCTRI', () => (
  <>
    <Providers>
      <CCTRI />
    </Providers>
  </>
));
