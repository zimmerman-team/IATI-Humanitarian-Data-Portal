import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { InPageNavigation } from './index';
import { mockData } from './mock';

storiesOf('Navigation|InPageNav', module).add('In Page Navigation', () => (
  <Providers>
    <InPageNavigation locations={mockData.locations} />
  </Providers>
));
