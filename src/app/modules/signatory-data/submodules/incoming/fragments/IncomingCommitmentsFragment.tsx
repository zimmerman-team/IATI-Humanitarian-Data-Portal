import { List } from 'app/components/datadisplay/Lists';
import { Grid } from '@material-ui/core';
import React from 'react';

export const IncomingCommitmentsFragment = ({ lists }) => (
  <Grid item xs={12} id={lists.elName}>
    {/**
     Incoming commitments

     - Total no. of activities with Incoming Pledges
     - With funding provider details specified
     - With funding organisation type provided
     */}

    <List valueHeaders {...lists} />
  </Grid>
);
