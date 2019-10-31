// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import Providers from 'app/Providers';
// comps
import { SignatoryData } from '.';

storiesOf('Modules|Page', module).add('Page - Signatory Data', () => (
  <>
    <Providers>
      <SignatoryData />
    </Providers>
  </>
));
