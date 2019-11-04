import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Box, Grid, Hidden } from '@material-ui/core';
import { DecoSigOverviewBottomRight } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewBottomRight';

export const FinancialReporting = ({ financialReportingData }) => (
  <Grid item xs={12} style={{ position: 'relative' }} id="reporting">
    {/**
     Financial reporting

     - Default currency
     - Reports to UN OCHA Financial Tracking Service (FTS)
     - Reports to UN OCHA For FTS via IATI
     - Reports to European Union (EDRIS)
     - Coverage for [2019]

     */}

    <List {...financialReportingData} />

    {/* ---------------------------------------- */}
    {/* decoration: bottom right */}
    <Hidden mdDown>
    <Box position="absolute" bottom="-40px" right="-50px" zIndex="-1">
      <DecoSigOverviewBottomRight />
    </Box>
    </Hidden>
    {/* ---------- */}
  </Grid>
);
