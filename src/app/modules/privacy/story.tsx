import React from 'react';
import { storiesOf } from '@storybook/react';

import { PrivacyModule } from '.';
import Providers from 'app/Providers';
import { DebugBox } from 'app/utils/layout';

storiesOf('Modules|Page', module).add('Page - privacy', () => (
  <>
    <Providers>
      <PrivacyModule />
    </Providers>
  </>
));
