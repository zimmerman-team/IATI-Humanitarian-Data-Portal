import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { MONLogo } from './index';

storiesOf('Svg|Logos', module).add('Ministry of the Netherlands', () => (
  <Providers>
    <MONLogo />
  </Providers>
));
