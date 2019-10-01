import React from 'react';
import { Grid } from '@material-ui/core';
import { List } from 'app/components/datadisplay/Lists';

export const ActivitySummaryFragment = ({ activitySummaryData }) => (
  <Grid item xs={12}>
    {/**
   Activity Summary

   - All actitives
   - Humanitarian activities
   - Current humanitarian activities
   */}

    <List valueHeaders {...activitySummaryData} />
  </Grid>
);
