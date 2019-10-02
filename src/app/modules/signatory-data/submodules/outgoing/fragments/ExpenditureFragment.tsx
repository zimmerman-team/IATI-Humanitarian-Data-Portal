import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Box, Grid } from '@material-ui/core';
import { DecoSignIncomingBottomRight } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSignIncomingBottomRight';

export const ExpenditureFragment = ({ lists }) => (
  <Grid item xs={12} style={{ position: 'relative' }} id={lists.elName}>
    {/**
   Expenditure

   - Total
   - With funding provider details specified
   - With funding organisation type provided
   - With source traceability information
   */}

    <List valueHeaders {...lists} />

    {/* ---------------------------------------- */}
    {/* decoration: bottom rightt */}
    <Box position="absolute" bottom="-200px" right="-100px" zIndex="-1">
      <DecoSignIncomingBottomRight />
    </Box>
    {/* ---------- */}
  </Grid>
);
