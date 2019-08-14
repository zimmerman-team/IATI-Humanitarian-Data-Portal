import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ProvidersPageModel } from './model';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import TableModule from 'app/components/datadisplay/Table/index';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import Box from '@material-ui/core/Box';

export const ProvidersPageLayout = (props: ProvidersPageModel) => {
  return (
    <Container>
      {/** --------------------------------------------------------------------------- */}
      {/** Breadcrumb + Title + Navigation */}

      <Grid
        container
        justify="space-between"
        direction="row"
        alignItems="flex-end"
      >
        <Grid item lg={6}>
          <BreadCrumbs
            currentLocation="ActionAid UK"
            previousLocations={['Signatory Data']}
          />
          <Box width="100%" height="32px" />
          <Typography variant="h3">{props.activity.name}</Typography>
          <Typography variant="overline">{props.activity.code}</Typography>
        </Grid>

        <Grid item lg={6} justify="flex-end">
          <SignatoryNavigation locations={locations} />
        </Grid>
      </Grid>

      <Box width="100%" height="64px" />
      {/** --------------------------------------------------------------------------- */}
      {/** Charts */}
      <Grid item lg={12}>
        <HorizontalBarChartCard
          title={props.barChartData.title}
          data={props.barChartData.data}
        />

        <Box width="100%" height="32px" />

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
