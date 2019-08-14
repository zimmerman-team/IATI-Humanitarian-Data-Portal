/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import { InsertLink } from '@material-ui/icons';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';

export const TimelinesLayout = () => {
  return (
    <Container>
      {/** --------------------------------------------------------------------------- */}
      {/** Breadcrumb */}
      <Grid container>
        {/** todo: add breadcrumb component */}
        <Typography variant="body2">Signatory Data / ActionAid UK</Typography>
      </Grid>
      {/** --------------------------------------------------------------------------- */}
      {/** Header */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h3" color="textPrimary">
                ActionAid UK
              </Typography>
            </Grid>
            <Grid item>
              {/** todo: style */}
              <Typography variant="body2" color="textPrimary">
                GB-CHC-274467 2017-2019
              </Typography>
            </Grid>
            <Grid item>
              {/** todo: style */}
              <Typography variant="body2" color="textPrimary">
                *earliest and latest activity start dates
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <InsertLink color="secondary" />
                </Grid>
                <Box width="5px" />
                <Grid item>
                  <Typography variant="body1" color="secondary">
                    {/**  todo: add link icon and make link of text */}
                    Publisher Supplementary Information
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Box height="50px" width="100%" />
        </Hidden>
        <Grid item xs={12} md={6}>
          {/** todo: add navigation 
        - Overview 
        - Activity List
        - Incoming transactions
        - Providers
        - Outgoing transactions
        - Recipents
        - Timeliness
        - Coverage
        */}

          <SignatoryNavigation locations={locations} />
        </Grid>
      </Grid>

      <Box width="100%" height="50px" />

      <Grid container spacing={4} direction="column">
        <Grid item md={6}>
          <Typography variant="h4">
            Humanitarian publishing frequency
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1">
            The table records the number of days in each of the last twelve
            months on which the most recently recorded transaction date was
            observed by the Dashboard to have changed.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Box width="100%" height="200px" bgcolor="white" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption">
            NB. The current month is also displayed for informational purposes,
            but is not used in the assessment.
          </Typography>
        </Grid>
      </Grid>

      <Box width="100%" height="100px" />

      <Grid container spacing={4} direction="column">
        <Grid item md={6}>
          <Typography variant="h4">Humanitarian data timelag</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1">
            The time-lag statistics attempt to assess how up to date the data is
            at the point that it is refreshed. For instance a publisher may
            refresh their data monthly, but the refreshed data is in fact three
            months old. Alternatively a publisher may only refresh their data
            once a year, but when they do it contains current data that is less
            than one month out of date.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Box width="100%" height="200px" bgcolor="white" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption">
            NB. The current month is also displayed for informational purposes,
            but is not used in the assessment.
          </Typography>
        </Grid>
      </Grid>
      <Box width="100%" height="50px" />
      <Grid container>
        <Grid item md={6}>
          <Typography variant="body1">
            NB. Frequency and Timelag calculated only using hum. transactions ie
            that relate to a hum activity or have been specifically marked as
            hum. The values below indicate when an update of published financial
            data was detected.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
