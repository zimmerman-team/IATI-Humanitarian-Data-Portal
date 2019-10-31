// core
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Typography, Box } from '@material-ui/core';
// utils
import Providers from 'app/Providers';
import { DebugBox, OutlineBox } from 'app/utils/layout';
// moock data
import { mockData } from './mock';
// comps
import { StatContainer } from './StatContainer';
import { Stat } from './Stat';

storiesOf('Components|Page', module).add('StatContainer', () => (
  <>
    <Providers>
      <Container>
        <Typography variant="h6">Stat Container</Typography>
        <Typography variant="body1">
          Simple display of signatory amounts per organisation
        </Typography>
        <Box height="40px" />
        <DebugBox>
          <StatContainer items={mockData.items} />
        </DebugBox>
        <Box height="40px" />
        <OutlineBox>
          <StatContainer items={mockData.items} />
        </OutlineBox>
      </Container>
    </Providers>
  </>
));

storiesOf('Components|Page', module).add('Stat', () => (
  <>
    <Typography variant="h6">Stat Component</Typography>
    <Box height="40px" />
    <Providers>
      <Container>
        <Stat description="lorem ipsum empty" value={66} />
      </Container>
    </Providers>
  </>
));
