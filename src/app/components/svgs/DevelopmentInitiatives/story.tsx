import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { DILogo } from './index';

storiesOf('Svg|Logos', module).add('Development Initiatives', () => (
  <Providers>
    <DILogo />
  </Providers>
));
