import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';

export const IncomingCommitmentsFragment = ({ lists }) => (
  <Grid item xs={12} id={lists.elName}>
    {/**
   Outgoing commitments

   - Total no. of activities with Outgoing Pledges
   - With funding provider details specified
   - With funding organisation type provided
   */}

    <List valueHeaders {...lists} />
  </Grid>
);
