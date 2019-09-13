import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { RecipientsModel } from './model';
import TableModule from 'app/components/datadisplay/Table/index';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import Box from '@material-ui/core/Box';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { DecoSigRecTopLeft } from 'app/modules/signatory-data/submodules/recipients/common/decoration/DecoSigRecTopLeft';
import { DecoSigRecBottomRight } from 'app/modules/signatory-data/submodules/recipients/common/decoration/DecoSigRecBottomRight';

export const RecipientsLayout = (props: RecipientsModel) => {
  return (
    <>
      {/* ---------------------------------------- */}
      {/* Charts */}

      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="0" left="0">
        <DecoSigRecTopLeft />
      </Box>
      {/* ---------- */}

      <Grid item lg={12} style={{ position: 'relative' }}>
        {/* ---------------------------------------- */}
        {/* Humanitarian recipient types */}
        <HorizontalBarChartCard
          title={props.barChartData.title}
          data={props.barChartData.data}
        />
        {/* ---------- */}

        <Box width="100%" height="32px" />
        <Hidden lgUp>
          <Box width="100%" height="32px" />
        </Hidden>

        {/* ---------------------------------------- */}
        {/* Recipients */}
        <TableModule
          title={props.tableData.title}
          columnsCell={props.tableData.columnsCell}
          columns={props.tableData.columns}
          data={props.tableData.data}
          options={props.tableData.options}
        />
        {/* ---------- */}

        {/* ---------------------------------------- */}
        {/* decoration: bottom right */}
        <Box position="absolute" bottom="-100px" right="-100px" zIndex="-1">
          <DecoSigRecBottomRight />
        </Box>
        {/* ---------- */}
      </Grid>
    </>
  );
};
