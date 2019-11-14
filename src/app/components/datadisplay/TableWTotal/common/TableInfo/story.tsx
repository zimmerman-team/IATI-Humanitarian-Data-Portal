import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableInfo } from './index';
import Providers from 'app/Providers';
import { tableInfoItems } from '../../mock';

storiesOf('Component|Datadisplay', module).add('Table info', () => (
  <Providers>
    <TableInfo infoItems={tableInfoItems} />
  </Providers>
));
