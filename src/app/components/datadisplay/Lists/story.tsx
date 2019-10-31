import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from '.';
import { listMockData } from './mock';
import Providers from 'app/Providers';

storiesOf('Data Display|Lists/', module).add('List', () => (
  <Providers>
    <List
      title={listMockData.title}
      subtitle={listMockData.subtitle}
      valueHeaders
      items={listMockData.items}
    />
    <List title={listMockData.title} valueHeaders items={listMockData.items} />
    <List
      title={listMockData.title}
      valueHeaders={false}
      items={listMockData.items}
    />
    {/*TODO: this last variant should have a line all the way through*/}
    <List valueHeaders={false} items={listMockData.items} />
    {/*<Component title={mockData.title} subtitle={mockData.subtitle} valueHeaders={true} items={mockData.items}/>*/}
  </Providers>
));
