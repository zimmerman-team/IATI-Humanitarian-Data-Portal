/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';

export const TimelinesLayout = () => {
  return (
  <>

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
 </>
  );
};
