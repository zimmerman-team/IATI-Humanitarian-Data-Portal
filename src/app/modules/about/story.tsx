import React from 'react';
import { storiesOf } from '@storybook/react';

import { AboutLayout } from './layout';
import Providers from 'app/Providers';
import { DebugBox } from 'app/utils/layout';

storiesOf('Modules|Page', module).add('Page - about', () => (
  <>
    <Providers>
      <DebugBox>
        <AboutLayout />
      </DebugBox>
    </Providers>
  </>
));
