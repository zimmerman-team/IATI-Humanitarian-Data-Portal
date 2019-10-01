import React from 'react';
import { List } from 'app/components/datadisplay/Lists';
import { Box, Grid } from '@material-ui/core';
import { DecoSigOverviewBottomRight } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewBottomRight';

export const FinancialReporting = ({financialReportingData}) => (
  <Grid item xs={12} style={{ position: 'relative' }}>
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
    <Box position="absolute" bottom="-40px" right="-50px" zIndex="-1">
      <DecoSigOverviewBottomRight />
    </Box>
    {/* ---------- */}
  </Grid>
)
