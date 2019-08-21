import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import Table from 'app/components/datadisplay/Table/index';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation/index';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import { ActivityListLayoutModel } from './model';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData } from 'app/components/navigation/Drawer/mock';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';

export const ActivityListLayout = (props: ActivityListLayoutModel) => {
  return (
    <Container>
      <Grid container>
        <SubmoduleHeader />

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
