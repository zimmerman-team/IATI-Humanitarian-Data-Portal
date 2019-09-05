import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableCard } from '.';
import Providers from 'app/Providers';

storiesOf('Data Display|variants/', module).add('Table Card', () => (
  <Providers>
    <TableCard
      title="Results"
      items={[
        [
          { value: 'Title of Result', link: '#' },
          { value: 'Reference code of Result' },
          { value: 'Type of Result' },
        ],
        [
          { value: 'Title of Result', link: '#' },
          { value: 'Reference code of Result' },
          { value: 'Type of Result' },
        ],
      ]}
    />
  </Providers>
));
