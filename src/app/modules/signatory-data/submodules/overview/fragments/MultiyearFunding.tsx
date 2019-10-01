import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';

export const MultiyearFunding = ({ humActWMultiYearFundData }) => (
  <Grid item xs={12}>
    {/**
     Hum. acitivites with multi-year funding

     - Current hum. activities with duration > 24 months
     - Current Hum. Activities > 24 months with budget exempt
     - Current hum. activities > 24 months & budgets for > 'next' 12 months

     */}

    <List valueHeaders {...humActWMultiYearFundData} />
  </Grid>
);
