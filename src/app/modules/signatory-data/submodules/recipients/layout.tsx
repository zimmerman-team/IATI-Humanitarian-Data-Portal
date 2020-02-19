import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { RecipientsModel } from 'app/modules/signatory-data/submodules/recipients/model';
import TableModule from 'app/components/datadisplay/Table/index';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import Box from '@material-ui/core/Box';
import { DecoSigRecTopLeft } from 'app/modules/signatory-data/submodules/recipients/common/decoration/DecoSigRecTopLeft';
import { DecoSigRecBottomRight } from 'app/modules/signatory-data/submodules/recipients/common/decoration/DecoSigRecBottomRight';
import { PageLoader } from 'app/modules/common/PageLoader';

export const RecipientsLayout = (props: RecipientsModel) => {
  return (
    <>
      {props.loading && (
        <PageLoader message="Please hold on while we process your request." />
      )}
      {/* ---------------------------------------- */}
      {/* Charts */}

      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Hidden smDown>
        <Box position="absolute" top="0" left="0" zIndex="9998">
          <DecoSigRecTopLeft data-testid="DecoSigRecTopLeft" />
        </Box>
      </Hidden>
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
          title="Funding recipients"
          columnsCell={props.tableData.columnsCell}
          columns={props.tableData.columns}
          data={props.tableData.data}
          options={props.tableData.options}
        />
        {/* ---------- */}

        {/* ---------------------------------------- */}
        {/* decoration: bottom right */}
        <Hidden smDown>
          <Box position="absolute" bottom="-100px" right="-100px" zIndex="-1">
            <DecoSigRecBottomRight data-testid="DecoSigRecBottomRight" />
          </Box>
        </Hidden>
        {/* ---------- */}
      </Grid>
    </>
  );
};
