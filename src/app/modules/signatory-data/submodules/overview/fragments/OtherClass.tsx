import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';

export const OtherClass = ({ humOtherClassOfInterestData }) => (
  <Grid item xs={12}>
    {/** Hum. other classifications of intererest

     - OECD DAC sector codes
     - OECD DAC aid types
     - Sustainable Development Goals (SDGs)
     - OECD DAC gender marker

     */}

    <List valueHeaders {...humOtherClassOfInterestData} />
  </Grid>
);
