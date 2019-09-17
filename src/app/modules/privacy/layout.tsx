/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { Page } from 'app/modules/common/Page';
import { PrivacyModel } from './model';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import parse from 'html-react-parser';
export const PrivacyModuleLayout = (props: PrivacyModel) => {
  return (
    <Page title={props.title} footer>
      {/*SECTION*/}
      <Grid container spacing={2}>
        <Grid item lg={8} md={10}>
          <Typography variant="h6">{props.sections[0].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />

        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[0].content[0])}
          </Typography>
        </Grid>
      </Grid>

      {/* -------------------- */}
      {/* SECTION 1 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[1].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[1].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[1].content[1])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[1].content[2])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      {/* -------------------- */}
      {/* SECTION 2 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[2].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[2].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[2].content[1])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[2].content[2])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[2].content[3])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[2].content[4])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}
      <Box height="50px" width="100%" />

      {/* -------------------- */}
      {/* SECTION 3 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[3].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[1])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[2])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[3])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[4])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[5])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[6])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[3].content[7])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      {/* -------------------- */}
      {/* SECTION 4 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[4].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[4].content[0])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      {/* -------------------- */}
      {/* SECTION 5 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[5].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[5].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[5].content[1])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[5].content[2])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[5].content[3])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      {/* -------------------- */}
      {/* SECTION 6 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[6].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[6].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[6].content[1])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[6].content[2])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}

      {/* -------------------- */}
      {/* SECTION 7 */}
      <Box height="50px" width="100%" />
      <Grid container>
        <Grid item lg={8} md={10}>
          <Typography variant="subtitle1">{props.sections[7].title}</Typography>
        </Grid>
        <Box height="16px" width="100%" />
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[7].content[0])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[7].content[1])}
          </Typography>
        </Grid>
        <Grid item lg={8} md={10}>
          <Typography variant="body1">
            {parse(props.sections[7].content[2])}
          </Typography>
        </Grid>
      </Grid>
      {/* ---------- */}
    </Page>
  );
};
