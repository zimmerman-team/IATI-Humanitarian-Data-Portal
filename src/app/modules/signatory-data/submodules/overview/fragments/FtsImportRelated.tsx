import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Box, Grid, Hidden } from '@material-ui/core';
import { DecoSigOverviewMidRight } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewMidRight';

export const FtsImportRelated = ({ humActFTSData }) => (
  <Grid item xs={12} id="fts">
    {/**
     Hum. activities with FTS Import related

     - Activities with humanitarian OECD DAC sector code 700 or 70000 range
     - With humanitarian indicator
     - With UN Humanitarian Response Plan(s)
     - With GLIDE code(s)
     - With organisation's own internal crisis codes (ie using vocab '99' )
     - With clusters

     */}

    <List valueHeaders {...humActFTSData} />
    {/* ---------------------------------------- */}
    {/* decoration: mid right */}
    <Hidden mdDown>
      <Box position="absolute" top="-20px" right="-100px" zIndex="-1">
        <DecoSigOverviewMidRight />
      </Box>
    </Hidden>
    {/* ---------- */}
  </Grid>
);
