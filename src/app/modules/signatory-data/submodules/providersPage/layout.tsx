import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { ProvidersPageModel } from './model';
import TableModule from 'app/components/datadisplay/Table/index';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import Box from '@material-ui/core/Box';

export const ProvidersPageLayout = (props: ProvidersPageModel) => {
  return (
    <>
      {/** --------------------------------------------------------------------------- */}
      {/** Charts */}
      <Grid item lg={12}>
        <HorizontalBarChartCard
          title={props.barChartData.title}
          data={props.barChartData.data}
        />

        <Box width="100%" height="32px" />
        <Hidden lgUp>
          <Box width="100%" height="32px" />
        </Hidden>

        <TableModule {...props.tableData} />
      </Grid>
    </>
  );
};
