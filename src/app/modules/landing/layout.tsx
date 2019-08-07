/* eslint-disable react/jsx-max-depth */
// core
import React from 'react';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';
// utils
import { Container, Grid, Typography, Box } from '@material-ui/core';
// mock data
import { mockData } from './common/StatContainer/mock';
// comps
import { StatContainer } from 'app/modules/landing/common/StatContainer/StatContainer';
import { DebugBox } from 'app/utils/layout';

const LandingPaper = styled.div`
  background-color: white;
  max-width: 987px;
  padding: 40px;
`;

const LandingIntrotext = styled(Typography)`
  mark {
    color: white;
    background: #5accbf;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const LandingLayout = () => {
  return (
    <Container>
      <LandingPaper>
        <Grid container direction="column">
          <Grid item md={10}>
            <Box width="99%">
              <LandingIntrotext variant="h1">
                <Highlighter
                  highlightClassName="YourHighlightClass"
                  searchWords={['Humanitarian']}
                  autoEscape
                  textToHighlight="A Spotlight on International Humanitarian Assistance Information"
                />
              </LandingIntrotext>
            </Box>
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
