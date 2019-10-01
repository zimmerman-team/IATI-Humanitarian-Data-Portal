import React from 'react';

// Model
import { ActivityDetailModel } from './model';

// Components
import { Grid, Typography, Box, Container } from '@material-ui/core';
import Table from 'app/components/datadisplay/Table';
import { ActivityHeaderLayout } from './common/activityHeader';
import { TableWTotal } from 'app/components/datadisplay/TableWTotal';

// Mock Data
import { TableCard } from 'app/components/datadisplay/Lists/variants/TableCard';
import { NavLists } from 'app/components/datadisplay/NavLists';
import { tableInfoItems } from 'app/components/datadisplay/TableWTotal/mock';

export const ActivityDetailsLayout = (props: ActivityDetailModel) => {
  return (
    <Container maxWidth="lg">
      {/** --------------------------------------------------------------------------- */}
      {/** Header Section */}
      <ActivityHeaderLayout
        activity={props.header.activity}
        organisation={props.header.organisation}
      />

      <Box width="100%" height="91px" />
      {/** --------------------------------------------------------------------------- */}
      {/** Section1 */}
      <Grid container lg={7} md={12}>
        <Typography variant="subtitle1">{props.sections[0].title}</Typography>
        <Box width="100%" height="25px" />
        <Typography variant="body1">{props.sections[0].content}</Typography>
      </Grid>

      <Box width="100%" height="91px" />

      {/** --------------------------------------------------------------------------- */}
      {/** Tables */}
      <Grid container lg={12} md={12}>
        {/*TODO: where is the black total sum up bar?*/}
        {/*TODO: Tables need to be horizontally scrollable and may not exceed parent width*/}

        <TableWTotal
          title={props.incomingTransactionsTableData.title}
          data={props.incomingTransactionsTableData.data}
          columns={props.incomingTransactionsTableData.columns}
          options={props.incomingTransactionsTableData.options}
          columnsCell={props.incomingTransactionsTableData.columnsCell}
          infoItems={tableInfoItems}
        />

        <Box height="80px" width="100%" />

        <TableWTotal
          title={props.outgoingTransactionsTableData.title}
          data={props.outgoingTransactionsTableData.data}
          columns={props.outgoingTransactionsTableData.columns}
          options={props.outgoingTransactionsTableData.options}
          columnsCell={props.outgoingTransactionsTableData.columnsCell}
          infoItems={[]}
        />
      </Grid>

      <Box height="112px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** List */}
      <NavLists lists={props.lists} />

      <Box height="144px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** Section2 */}
      <Grid container xs={12} style={{ paddingLeft: '16px' }}>
        <Typography variant="h4">{props.sections[1].title}</Typography>
        <Box width="100%" height="25px" />
        <TableCard
          fullWidth
          title={props.tableCard ? props.tableCard.title : ''}
          items={props.tableCard ? props.tableCard.items : []}
        />
        <Box width="100%" height="32px" />
      </Grid>

      <Box height="50px" />
    </Container>
  );
};
