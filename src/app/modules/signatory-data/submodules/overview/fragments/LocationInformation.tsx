import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';

export const LocationInformation = ({humActWLocationInfoData}) => (
  <Grid item xs={12}>
    {/**    Hum. activites with location information

     - Activities with recipient countries
     - With latitude / longitude coordinates
     - Describing location according to a recognised geo-location gazetteer
     - Using any other type of sub-national location data
     */}

    <List valueHeaders {...humActWLocationInfoData} />
  </Grid>
);
