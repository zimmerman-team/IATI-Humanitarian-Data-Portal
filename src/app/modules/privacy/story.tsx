import React from 'react';
import { storiesOf } from '@storybook/react';

import { PrivacyModule } from '.';
import Providers from 'app/Providers';

storiesOf('Modules|Page', module).add('Page - privacy', () => (
  <>
    <Providers>
      <PrivacyModule />
    </Providers>
  </>
));
