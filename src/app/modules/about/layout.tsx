import React from 'react';
import { Page } from 'app/modules/common/Page';
import { AboutPageModel } from './model';
import { Box, Grid, Typography } from '@material-ui/core';
import parse from 'html-react-parser';
import ContainedButton from 'app/components/inputs/buttons/IconButton';

//TODO: -Correct page title => @jim?
//      -Correct outer container margins of MD size => @jim?
//      -Implement correct spacing between components
//      -Implement background with artworks
//      -Implement footer component

export const AboutLayout = (props: AboutPageModel) => {
  return (
    <Page title={props.title}>
      {/*SECTION*/}
      <Grid container spacing={2}>
        <Grid item lg={8} md={10}>
          <Typography variant="h6">{props.sections[0].title}</Typography>
        </Grid>
        <Box height="16px" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[0].content[0])}
          </Typography>
        </Grid>
      </Grid>

      {/* SECTION*/}
      <Box height="50px" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[1].title}</Typography>
        </Grid>
        <Box height="16px" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[1].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Typography variant="body1">
                {parse(props.sections[1].content[1])}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {parse(props.sections[1].content[2])}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {parse(props.sections[1].content[3])}
              </Typography>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  <Typography variant="body1">
                    {parse(props.sections[1].content[4])}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {parse(props.sections[1].content[5])}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {parse(props.sections[1].content[6])}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    {parse(props.sections[1].content[7])}
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography variant="body1">
                {parse(props.sections[1].content[8])}
              </Typography>
            </li>
          </ul>
        </Grid>
        <Box height="20px" />
        <Grid item lg={8} md={10}>
          <Typography>{parse(props.sections[1].content[9])}</Typography>
        </Grid>
        <Box height="50px" />
        <Grid item lg={8} md={10}>
          <ContainedButton text="More info" />
        </Grid>

        {/*SECTION*/}
        <Box height="50px" />
        <Grid item lg={8} md={10}>
          <Typography variant="h6">{props.sections[2].title}</Typography>
        </Grid>
        <Box height="16px" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[2].content[0])}
          </Typography>
        </Grid>
      </Grid>
    </Page>
  );
};
