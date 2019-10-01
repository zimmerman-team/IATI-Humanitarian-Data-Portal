import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';


export const Humanitarian = ({humResultsData}) => (
  <Grid item xs={12}>
    {/**   Humanitarian results

     - Activities with results
     - With results documents links
     - With result indicators with baseline and target values
     - With result indicator documents links

     */}

    <List valueHeaders {...humResultsData} />
  </Grid>
)
