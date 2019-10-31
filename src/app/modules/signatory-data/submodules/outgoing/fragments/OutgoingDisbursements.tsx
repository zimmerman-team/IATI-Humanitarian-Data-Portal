import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';

export const OutgoingDisbursements = ({ lists }) => (
  <Grid item xs={12} id={lists.elName}>
    {/**
   Outgoing disbursements

   - Total no. of activities with Outgoing Pledges
   - With funding provider details specified
   - With funding organisation type provided
   - With source traceability information
   */}

    <List valueHeaders {...lists} />
  </Grid>
);
