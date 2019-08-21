// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import Providers from 'app/Providers';
// comps
import { SubmoduleHeaderLayout } from './layout';
import { Container } from '@material-ui/core';

storiesOf('Components|Page', module).add('SubmoduleHeaderLayout', () => (
  <>
    <Providers>
      <Container maxWidth="lg">
        <SubmoduleHeaderLayout />
      </Container>
    </Providers>
  </>
));
