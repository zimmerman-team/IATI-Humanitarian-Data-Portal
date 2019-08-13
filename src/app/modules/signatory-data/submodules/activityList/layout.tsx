import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import Table from 'app/components/datadisplay/Table/index';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation/index';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import { ActivityListLayoutModel } from './model';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData } from 'app/components/navigation/Drawer/mock';

export const ActivityListLayout = (props: ActivityListLayoutModel) => {
  return (
    <Container>
      {/** --------------------------------------------------------------------------- */}
      {/** Header */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Hidden mdUp>
              <Box height="72px" width="100%" />
              {/*TODO: Replace with props*/}
              <BreadCrumbs
                currentLocation="ActionAid UK"
                previousLocations={['Signatory Data']}
              />
              <Box height="12px" width="100%" />
              {/*TODO: Replace with props */}
              <DrawerMenu links={mockData.links} />
            </Hidden>
            <Grid item>
              <Typography variant="h3" color="textPrimary">
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="overline"
                style={{ color: 'rgba(1, 1, 10, 0.6)' }}
              >
                {props.subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Box height="50px" width="100%" />
        </Hidden>
        <Grid item xs={12} md={6}>
          <SignatoryNavigation locations={locations} />
        </Grid>
        {/** --------------------------------------------------------------------------- */}

        {/*TODO: this box height should be 64 when SignatoryNavigation has been refactored*/}
        <Box height="44px" width="100%" />
        {/** --------------------------------------------------------------------------- */}
        {/** Table */}
        <Grid item>
          <Table
            title={props.activity.title}
            data={props.activity.data}
            options={props.activity.options}
            columns={props.activity.columns}
            columnsCell={props.activity.columnsCell}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
