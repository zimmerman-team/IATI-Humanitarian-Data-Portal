import React from 'react';
import { storiesOf } from '@storybook/react';

import { Page } from '.';
import Providers from 'app/Providers';

storiesOf('Modules|Page', module).add('Page - layout', () => (
  <>
    <Providers>
      <Page
        title="The Grand Bargain
transparency commitment"
      />
    </Providers>
  </>
));
