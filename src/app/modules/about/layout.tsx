/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { Page } from 'app/modules/common/Page';
import { AboutPageModel } from 'app/modules/about/model';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import parse from 'html-react-parser';
import ContainedButton from 'app/components/inputs/buttons/IconButton';
import { Footer } from 'app/components/surfaces/Footer';
import { DecoAboutTopLeft } from 'app/modules/about/common/decorations/DecoAboutTopLeft';
import { DecoAboutMidLeft } from 'app/modules/about/common/decorations/DecoAboutMidLeft';
import { DecoAboutRight } from 'app/modules/about/common/decorations/DecoAboutRight';
import { DecoAboutMidRight } from 'app/modules/about/common/decorations/DecoAboutMidRight';
import { DecoAboutBottomRight } from 'app/modules/about/common/decorations/DecoAboutBottomRight';

// TODO: -Correct page title => @jim?
//      -Correct outer container margins of MD size => @jim?
//      -Implement correct spacing between components
//      -Implement background with artworks
//      -Implement footer component

export const AboutLayout = (props: AboutPageModel) => {
  return (
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
        <Box position="absolute" top="10px" left="10px" zIndex="10000">
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

      <Hidden smDown>
        <Box position="absolute" top="258px" left="0">
          <DecoAboutMidLeft data-testid="DecoAboutMidLeft" />
        </Box>
      </Hidden>

      <Hidden smDown>
        <Box position="absolute" bottom="-270px" right="0">
          <DecoAboutBottomRight data-testid="DecoAboutBottomRight" />
        </Box>
      </Hidden>

      <Footer />
    </Page>
  );
};
