/* eslint-disable react/jsx-max-depth */
// core
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
// utils
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
// comps
import { StatContainer } from 'app/modules/landing/common/StatContainer/StatContainer';
import { LandingModel } from 'app/modules/landing/model';
import { DecorationLanding } from 'app/modules/common/ModuleBackground/assets/DecorationLanding';

const LandingPaper = styled.div`
  background-color: white;
  max-width: 839px;
  padding: 40px;
  position: relative;
  @media (max-width: 960px) {
    padding: 24px;
    width: calc(100% - 16px);
    left: -16px;
  }
`;

const LandingIntrotext = styled(Typography)`
  &&& {
    line-height: 1.2;
    mark {
      color: white;
      background: #5accbf;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

const VersionBox = styled(Box)`
  && {
    margin-top: 113px;
    padding-bottom: 10px;
  }
`;

const StatBox = styled(Box)`
  @media (min-width: 960px) {
    padding-left: 40px;
  }
  padding-left: 8px;
`;

export const LandingLayout = (props: LandingModel) => {
  return (
    <Container>
      {/*<DebugBox>*/}
      <LandingPaper>
        <Grid container direction="column">
          <Grid item md={12} xs={12}>
            <Box width="97%">
              <Hidden smDown>
                <Typography variant="h5" color="primary">
                  <b>Welcome to the IATI Humanitarian Data Portal</b>
                </Typography>
              </Hidden>
              <Box height="10px" />
              <LandingIntrotext variant="h1">
                <Highlighter
                  autoEscape
                  searchWords={['Humanitarian']}
                  textToHighlight="A Spotlight on International Humanitarian Assistance IATI Data"
                />
              </LandingIntrotext>
            </Box>
          </Grid>
          <Box height="40px" />
          <Grid item md={7}>
            <Typography variant="h5">
              Explore the humanitarian data that Grand Bargain Signatories are
              publishing to IATI and learn more about how the{' '}
              <Link to="/about">Grand Bargain Transparency commitments</Link>{' '}
              are helping signatories to publish better data on global
              humanitarian action.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Box position="absolute" zIndex="-1" right="-332px" top="0px">
            <DecorationLanding data-testid="landing-decoration" />
          </Box>
        </Hidden>
      </LandingPaper>
      {/*</DebugBox>*/}
      <Box height="40px" />

      <StatBox>
        <StatContainer items={props.stats} />
      </StatBox>

      <VersionBox paddingLeft="40px">
        <Typography variant="body2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zimmerman-zimmerman/IATI-Humanitarian-Data-Portal/releases"
          >
            Portal Status: <b>LIVE Version 1.0</b>
          </a>
        </Typography>
      </VersionBox>
    </Container>
  );
};
