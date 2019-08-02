// core
import React from 'react';
import styled from 'styled-components';
// utils
import { Container, Grid, Typography, Box } from '@material-ui/core';
// mock data
import { mockData } from './common/StatContainer/mock';
// comps
import { StatContainer } from 'app/modules/landing/common/StatContainer/StatContainer';

const LandingPaper = styled.div`
  background-color: white;
  /* outline: 1px solid black; */
  max-width: 987px;
  padding: 40px;
`;

export const LandingLayout = () => {
  return (
    <Container>
      <LandingPaper>
        <Grid container direction="column">
          <Grid item md={10}>
            <Typography variant="h1">
              A Spotlight on International Humanitarian Assistance Information
            </Typography>
          </Grid>
          <Box height="40px" />
          <Grid item md={7}>
            <Typography variant="h5">
              Why the Grand Bargain Transparency Commitment is aiming to improve
              the availability of timely, high quality, harmonised and
              transparent open data on global humanitarian action.
            </Typography>
          </Grid>
        </Grid>
      </LandingPaper>
      <Box height="40px" />
      <Box paddingLeft="40px">
        <StatContainer items={mockData.items} />
      </Box>
    </Container>
  );
};
