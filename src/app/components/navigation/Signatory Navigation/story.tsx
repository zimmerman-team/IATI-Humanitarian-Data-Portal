import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { SignatoryNavigation } from './index';
import { locations } from './mock';

storiesOf('Navigation|Signatory Navigation', module).add('Signatory Navigation', () => (
  <Providers>
    <SignatoryNavigation locations={locations}/>
  </Providers>
));
