/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { Page } from 'app/modules/common/Page';
import { AboutPageModel } from 'app/modules/about/model';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import parse from 'html-react-parser';
import { Footer } from 'app/components/surfaces/Footer';
import { DecoAboutTopLeft } from 'app/modules/about/common/decorations/DecoAboutTopLeft';
import { DecoAboutMidLeft } from 'app/modules/about/common/decorations/DecoAboutMidLeft';
import { DecoAboutRight } from 'app/modules/about/common/decorations/DecoAboutRight';
import { DecoAboutMidRight } from 'app/modules/about/common/decorations/DecoAboutMidRight';
import { DecoAboutBottomRight } from 'app/modules/about/common/decorations/DecoAboutBottomRight';

export const AboutLayout = (props: AboutPageModel) => {
  return (
    <>
      <Page title={props.title} footer>
        {props.cmsTextBlocks.map(block => (
          <>
            <Grid container>
              <Grid item lg={8} md={10}>
                <Typography variant="h6" data-testid="title">
                  {block.title}
                </Typography>
              </Grid>
              <Box height="16px" width="100%" />
              {parse(block.body)}
              {block.moreLink && (
                <>
                  <Box height="50px" width="100%" />
                  {/* disable for now */}
                  {/*<Grid item lg={8} md={10}>
                  <ContainedButton text="More info" />
                </Grid>*/}
                </>
              )}
            </Grid>
            <Box height="50px" width="100%" />
          </>
        ))}

        <Grid container spacing={2}>
          <Box position="absolute" top="10px" left="10px" zIndex="9998">
            <DecoAboutTopLeft data-testid="DecoAboutTopLeft" />
          </Box>

          <Hidden mdDown>
            <Box position="absolute" top="360px" right="100px">
              <DecoAboutRight data-testid="DecoAboutRight" />
            </Box>
          </Hidden>

          <Hidden mdDown>
            <Box position="absolute" top="1050px" right="100px">
              <DecoAboutMidRight data-testid="DecoAboutMidRight" />
            </Box>
          </Hidden>
        </Grid>

        <Hidden mdDown>
          <Box position="absolute" top="258px" left="0">
            <DecoAboutMidLeft data-testid="DecoAboutMidLeft" />
          </Box>
        </Hidden>

        <Hidden mdDown>
          <Box position="absolute" bottom="-270px" right="0">
            <DecoAboutBottomRight data-testid="DecoAboutBottomRight" />
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box height="100px" width="100%" />
        </Hidden>
      </Page>

      <Footer />
    </>
  );
};
