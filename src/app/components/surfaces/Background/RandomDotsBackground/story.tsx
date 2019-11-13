import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { Background } from './index';

storiesOf('Surfaces|Backgrounds', module).add('Random Dots Background', () => (
  <Providers>
    <Background hasXL={false} />
  </Providers>
));
