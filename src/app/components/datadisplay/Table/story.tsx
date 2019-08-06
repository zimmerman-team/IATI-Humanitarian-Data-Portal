import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from './index';
import {
  mockDataVar1,
  mockDataVar2,
  mockDataVar3,
  mockDataVar4,
  mockDataVar5,
  mockDataVar6,
} from './mock';
import Providers from '../../../Providers';
import color from '../../../theme/color';

const Container = styled.div`
  padding: 10px;
  background: ${color.white};
`;

storiesOf('Data Display|Table', module).add('Variant 1', () => (
  <Providers>
    <Container>
      <Component {...mockDataVar1} />
    </Container>
  </Providers>
));

storiesOf('Data Display|Table', module).add('Variant 2', () => (
  <Providers>
    <Container>
      <Component {...mockDataVar2} />
    </Container>
  </Providers>
));

storiesOf('Data Display|Table', module).add('Variant 3', () => (
  <Providers>
    <Container>
      <Component {...mockDataVar3} />
    </Container>
  </Providers>
));

storiesOf('Data Display|Table', module).add('Variant 4', () => (
  <Providers>
    <Container>
      <Component {...mockDataVar4} />
    </Container>
  </Providers>
));

storiesOf('Data Display|Table', module).add('Variant 5', () => (
  <Providers>
    <Container>
      <Component {...mockDataVar5} />
    </Container>
  </Providers>
));

storiesOf('Data Display|Table', module).add('Variant 6', () => (
  <Providers>
    <Container>
      <Component {...mockDataVar6} />
    </Container>
  </Providers>
));
