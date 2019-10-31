// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { LandingLayout } from './layout';

storiesOf('Modules|Page', module).add('Page - Landing', () => (
  <>
    <Providers>
      <LandingLayout />
    </Providers>
  </>
));
