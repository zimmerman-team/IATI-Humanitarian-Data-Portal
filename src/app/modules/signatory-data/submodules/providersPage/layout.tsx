import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { ProvidersPageModel } from 'app/modules/signatory-data/submodules/providersPage/model';
import TableModule from 'app/components/datadisplay/Table/index';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import Box from '@material-ui/core/Box';
import { DecoSigProviderTopLeft } from 'app/modules/signatory-data/submodules/providersPage/common/decoration/DecoSigProviderTopLeft';
import { DecoSignIncomingBottomRight } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSignIncomingBottomRight';
import { PageLoader } from 'app/modules/common/PageLoader';

export const ProvidersPageLayout = (props: ProvidersPageModel) => {
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
        <Box position="absolute" top="0" left="0" zIndex="1">
          <DecoSigProviderTopLeft data-testid="DecoSigProviderTopLeft" />
        </Box>
      </Hidden>
      {/* ---------- */}
      <Grid item lg={12} style={{ position: 'relative' }}>
        {/* ---------------------------------------- */}
        {/* Humanitarian providers breakdown */}
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
        {/* Providers */}
        <TableModule {...props.tableData} />
        {/* ---------- */}

        {/* ---------------------------------------- */}
        {/* decoration: bottom rightt */}
        <Hidden smDown>
          <Box position="absolute" bottom="-400px" right="-100px" zIndex="-1">
            <DecoSignIncomingBottomRight data-testid="DecoSignIncomingBottomRight" />
          </Box>
        </Hidden>
        {/* ---------- */}
      </Grid>
    </>
  );
};
