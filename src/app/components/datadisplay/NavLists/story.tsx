import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import React from 'react';
import { TableCardContainer } from './index';

/* mock */
import { mockData } from 'app/modules/activityDetails/mock';

storiesOf('Data Display | Components', module).add('Nav Lists', () => (
  <>
    <Providers>
      <TableCardContainer lists={mockData.lists} />
    </Providers>
  </>
));
