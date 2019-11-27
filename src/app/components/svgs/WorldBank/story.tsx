import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { WBLogo } from './index';

storiesOf('Svg|Logos', module).add('World Bank', () => (
  <Providers>
    <WBLogo />
  </Providers>
));
