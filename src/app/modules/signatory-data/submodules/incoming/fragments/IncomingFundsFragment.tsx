import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Box, Grid, Hidden } from '@material-ui/core';
import { DecoSignIncomingBottomRight } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSignIncomingBottomRight';

export const IncomingFundsFragment = ({ lists }) => (
  <Grid item xs={12} style={{ position: 'relative' }} id={lists.elName}>
    {/**
     Incoming funds

     - Total no. of activities with Incoming Pledges
     - With funding provider details specified
     - With funding organisation type provided
     - With source traceability information
     */}
    <List valueHeaders {...lists} />
    {/* ---------------------------------------- */}
    {/* decoration: top left */}
{/* <<<<<<< feature/MLT-817
    <Hidden smDown>
    */}
    <Hidden mdDown>
      <Box position="absolute" bottom="-200px" right="-100px" zIndex="-1">
        <DecoSignIncomingBottomRight />
      </Box>
    </Hidden>
    {/* ---------- */}
  </Grid>
);
