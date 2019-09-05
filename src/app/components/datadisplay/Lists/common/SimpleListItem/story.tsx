import React from 'react';
import { storiesOf } from '@storybook/react';
import { SimpleListItem } from '.';
import Providers from 'app/Providers';

storiesOf('Data Display|Lists/', module).add('Simple List Item', () => (
  <Providers>
    <SimpleListItem
      items={['Title of Result', ' Reference code of Result', 'Type of Result']}
      index={0}
    />
  </Providers>
));
