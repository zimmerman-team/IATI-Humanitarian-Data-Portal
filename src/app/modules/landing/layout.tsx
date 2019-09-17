/* eslint-disable react/jsx-max-depth */
// core
import React from 'react';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';
// utils
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
// comps
import { StatContainer } from 'app/modules/landing/common/StatContainer/StatContainer';
import { LandingModel } from 'app/modules/landing/model';
import { DecorationLanding } from 'app/modules/common/ModuleBackground/assets/DecorationLanding';
import { DebugBox } from 'app/utils/layout';
import { CookieDialog } from 'app/components/feedback/SnackBar/CookieDialog';

const LandingPaper = styled.div`
  background-color: white;
  max-width: 839px;
  padding: 40px;
  //padding-top: 80px;
  //padding-bottom: 50px;
  position: relative;
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

export const LandingLayout = (props: LandingModel) => {
  return (
    <Container>
      {/*<DebugBox>*/}
      <LandingPaper>
        <Grid container direction="column">
          <Grid item md={12}>
            <Box width="97%">
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
        <Hidden smDown>
          <Box position="absolute" zIndex="-1" right="-332px" top="0px">
            <DecorationLanding />
          </Box>
        </Hidden>
      </LandingPaper>
      {/*</DebugBox>*/}
      <Box height="40px" />
      <Box paddingLeft="40px">
        <StatContainer items={props.stats} />
      </Box>

      <CookieDialog
        message="The website uses cookies for tracking statistics. Read Grand Bargains data privacy for more details."
        open
      />
    </Container>
  );
};
