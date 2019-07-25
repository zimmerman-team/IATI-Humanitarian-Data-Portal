import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import {mockData } from './mock';
import Providers from 'app/Providers';

storiesOf('Data Display|Lists/', module).add('List', () => (
  <Providers>
    <Component title={mockData.title} subtitle={mockData.subtitle} valueHeaders items={mockData.items}/>
    <Component title={mockData.title} valueHeaders items={mockData.items}/>
    <Component title={mockData.title} valueHeaders={false} items={mockData.items}/>
    {/*TODO: this last variant should have a line all the way through*/}
    <Component valueHeaders={false} items={mockData.items}/>
    {/*<Component title={mockData.title} subtitle={mockData.subtitle} valueHeaders={true} items={mockData.items}/>*/}
  </Providers>
));
