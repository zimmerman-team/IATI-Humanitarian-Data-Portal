import React from 'react';
import styled from 'styled-components';

//Model
import { ActivityListDetailModel } from './model';

//Components
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import { ActivityDetailsHeaderCard } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { List } from 'app/components/datadisplay/Lists';
import Table from 'app/components/datadisplay/Table';

//Mock Data
import { mockData as inPageNavMockData } from 'app/components/navigation/InPageNavigation/mock';
import { mockData as drawerMockData } from 'app/components/navigation/Drawer/mock';

const ContentTypography = styled(props => <Typography {...props} />)`
  column-count: 2;
  column-gap: 6rem;
`;

export const ActivityListDetailsLayout = (props: ActivityListDetailModel) => {
  return (
    <Container>
      {/** --------------------------------------------------------------------------- */}
      {/** Header && Breadcumnb */}
      <Hidden mdUp>
        {/*TODO: Replace with props */}
        <DrawerMenu links={drawerMockData.links} />
        <Box height="72px" width="100%" />
      </Hidden>

      <Grid container lg={9}>
        <BreadCrumbs
          currentLocation="Details Activitiy"
          previousLocations={['Signatory Data', 'ActionAid UK']}
        />
        <Box width="100%" height="25px" />
        <ActivityDetailsHeaderCard
          organisation={props.header.organisation}
          activity={props.header.activity}
        />
      </Grid>

      <Box width="100%" height="64px" />

      {/** --------------------------------------------------------------------------- */}
      {/** Section1 */}
      <Grid container lg={7}>
        <Typography variant="subtitle1">{props.sections[0].title}</Typography>
        <Box width="100%" height="25px" />
        <Typography variant="body1">{props.sections[0].content}</Typography>
      </Grid>

      <Box width="100%" height="91px" />

      {/** --------------------------------------------------------------------------- */}
      {/** Tables */}
      <Grid container>
        {/*TODO: where is the black total sum up bar?*/}
        <Table
          title={props.incomingTransactionsTableData.title}
          data={props.incomingTransactionsTableData.data}
          columns={props.incomingTransactionsTableData.columns}
          options={props.incomingTransactionsTableData.options}
          columnsCell={props.incomingTransactionsTableData.columnsCell}
        />

        <Box height="80px" width="100%" />

        <Table
          title={props.outgoingTransactionsTableData.title}
          data={props.outgoingTransactionsTableData.data}
          columns={props.outgoingTransactionsTableData.columns}
          options={props.outgoingTransactionsTableData.options}
          columnsCell={props.outgoingTransactionsTableData.columnsCell}
        />
      </Grid>

      <Box height="166px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** Section2 */}
      <Grid container lg={11} style={{ paddingLeft: '16px' }}>
        <Typography variant="h4">{props.sections[1].title}</Typography>
        <Box width="100%" height="25px" />
        <ContentTypography variant="body1">
          {props.sections[1].content}
        </ContentTypography>
      </Grid>

      <Box height="144px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** List */}
      <Grid container spacing={4}>
        <Grid item lg={3}>
          <InPageNavigation locations={inPageNavMockData.locations} />
        </Grid>

        <Grid item lg={8}>
          {props.lists.map(list => (
            <>
              <List items={list.items} />
              <Box width="100%" height="32px" />
            </>
          ))}
        </Grid>
      </Grid>

      <Box height="50px" />
    </Container>
  );
};
