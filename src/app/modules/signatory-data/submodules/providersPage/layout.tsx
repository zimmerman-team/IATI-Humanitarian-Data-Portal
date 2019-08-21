import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ProvidersPageModel } from './model';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import TableModule from 'app/components/datadisplay/Table/index';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import Box from '@material-ui/core/Box';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData as drawerMockData } from 'app/components/navigation/Drawer/mock';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';

export const ProvidersPageLayout = (props: ProvidersPageModel) => {
  return (
    <Container>
      <SubmoduleHeader />

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

        <TableModule
          title={props.tableData.title}
          columnsCell={props.tableData.columnsCell}
          columns={props.tableData.columns}
          data={props.tableData.data}
          options={props.tableData.options}
        />
      </Grid>
    </Container>
  );
};
