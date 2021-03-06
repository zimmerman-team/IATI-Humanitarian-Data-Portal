// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { SignatoryProgress } from '.';

storiesOf('Modules|Page', module).add('Page - Signatory Progress', () => (
  <>
    <Providers>
      <SignatoryProgress />
    </Providers>
  </>
));
