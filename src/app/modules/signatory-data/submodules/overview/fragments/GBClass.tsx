import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';

export const GBClass = ({ humActwGBClassificationsData }) => (
  <Grid item xs={12} id="GBClass">
    {/**
     Hum. activity with Grand Bargain classifications

     - Earmarked for Grand Bargain (Categories)
     - Earmarked for Grand Bargain (Modalities)
     - Partner Country Based (I)NGO organisation type used
     - Cash transfer (Not yet available in IATI Standard)

     */}

    <List valueHeaders {...humActwGBClassificationsData} />
  </Grid>
);
