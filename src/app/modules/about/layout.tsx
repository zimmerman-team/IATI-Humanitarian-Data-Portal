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
  // TODO: these are just for api call example purposes, remove this once actual
  //  api calls are implemented
  // const activities = useStoreState(state => state.activities);
  // console.log('activities', activities);
  //
  // const callActivities = useStoreActions(actions => actions.activities.fetch);
  //
  // const onButtonClick = useCallback(() => {
  //   callActivities({ values: { q: 'iati_identifier:GB-CHC-202918-ARMA66' } }); // 👈 dispatch our action with the text describing the todo
  // }, [fetch, { values: { q: 'iati_identifier:GB-CHC-202918-ARMA66' } }]);

  return (
    <Page title={props.title} footer>
      {/*SECTION*/}
      <Grid container spacing={2}>
        <Grid item lg={8} md={10}>
          <Typography variant="h6" data-testid={'title'}>
            {props.sections[0].title}
          </Typography>
        </Grid>
        <Box height="16px" width="100%" />
        {/*TODO: this is just for api call example purposes, remove this once actual
            api calls are implemented*/}
        {/*<div style={{ height: 100, width: 100 }} onClick={onButtonClick}> CLICK ME </div>*/}
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[0].content[0])}
          </Typography>
        </Grid>
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

      {/* SECTION*/}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[1].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1" data-testid={'paragraph'}>
            {parse(props.sections[1].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Typography variant="body1" data-testid={'paragraph'}>
                {parse(props.sections[1].content[1])}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {parse(props.sections[1].content[2])}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" data-testid={'paragraph'}>
                {parse(props.sections[1].content[3])}
              </Typography>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  <Typography variant="body1" data-testid={'paragraph'}>
                    {parse(props.sections[1].content[4])}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" data-testid={'paragraph'}>
                    {parse(props.sections[1].content[5])}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" data-testid={'paragraph'}>
                    {parse(props.sections[1].content[6])}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" data-testid={'paragraph'}>
                    {parse(props.sections[1].content[7])}
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography variant="body1" data-testid={'paragraph'}>
                {parse(props.sections[1].content[8])}
              </Typography>
            </li>
          </ul>
        </Grid>
        <Box height="20px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography data-testid={'paragraph'}>
            {parse(props.sections[1].content[9])}
          </Typography>
        </Grid>
        <Box height="50px" width="100%" />
        <Grid item lg={8} md={10}>
          <ContainedButton text="More info" />
        </Grid>

        {/*SECTION*/}
        <Box height="50px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="h6" data-testid={'paragraph'}>
            {props.sections[2].title}
          </Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1" data-testid={'paragraph'}>
            {parse(props.sections[2].content[0])}
          </Typography>
        </Grid>
      </Grid>
      <Box height="50px" width="100%" />

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
