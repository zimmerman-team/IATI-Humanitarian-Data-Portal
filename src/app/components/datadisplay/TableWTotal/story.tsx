import { storiesOf } from '@storybook/react';
import Providers from '../../../Providers';
import React from 'react';
import { TableWTotal } from './index';
import { mockDataVar1 } from '../Table/mock';
import { tableInfoItems } from './mock';

storiesOf('Component|Datadisplay', module).add('Table With Total Info', () => (
  <Providers>
    <TableWTotal {...mockDataVar1} infoItems={tableInfoItems} />
  </Providers>
));
