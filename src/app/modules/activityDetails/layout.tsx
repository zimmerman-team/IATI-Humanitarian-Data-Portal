import React from 'react';

// Model
import { ActivityDetailModel } from './model';

// Components
import { Grid, Typography, Box, Container } from '@material-ui/core';
import { ActivityHeaderLayout } from 'app/modules/activityDetails/common/activityHeader';
import { TableWTotal } from 'app/components/datadisplay/TableWTotal';

// Mock Data
import { TableCard } from 'app/components/datadisplay/Lists/variants/TableCard';
import { TableCardContainer } from 'app/components/datadisplay/NavLists';

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
      {/*<Box width="50px" height="50px" bgcolor="yellow" />*/}
      <Grid container>
        <Grid item md={12}>
          <Typography variant="subtitle1">{props.sections[0].title}</Typography>
          <Box width="100%" height="25px" />
          <Typography variant="body1">{props.sections[0].content}</Typography>
        </Grid>
      </Grid>

      <Box width="100%" height="91px" />

      {/** --------------------------------------------------------------------------- */}
      {/** Tables */}

      <Grid container>
        <Grid item md={12}>
          {/*TODO: where is the black total sum up bar?*/}
          {/*TODO: Tables need to be horizontally scrollable and may not exceed parent width*/}

          <TableWTotal
            title={props.incomingTransactionsTableData.title}
            data={props.incomingTransactionsTableData.data}
            columns={props.incomingTransactionsTableData.columns}
            options={props.incomingTransactionsTableData.options}
            columnsCell={props.incomingTransactionsTableData.columnsCell}
            infoItems={props.incomingTransactionsTableData.infoItems}
          />

          <Box height="80px" width="100%" />

          <TableWTotal
            title={props.outgoingTransactionsTableData.title}
            data={props.outgoingTransactionsTableData.data}
            columns={props.outgoingTransactionsTableData.columns}
            options={props.outgoingTransactionsTableData.options}
            columnsCell={props.outgoingTransactionsTableData.columnsCell}
            infoItems={props.outgoingTransactionsTableData.infoItems}
          />
        </Grid>
      </Grid>

      <Box height="112px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** List */}

      <TableCardContainer lists={props.lists} />
      {/** --------------------------------------------------------------------------- */}
      {/** Results */}
      <Grid container spacing={4} justify="flex-end">
        <Grid xs={12} md={9} item>
          <Typography variant="h4">{props.sections[1].title}</Typography>
          <Box width="100%" height="25px" />
          <TableCard
            fullWidth
            title={props.tableCard ? props.tableCard.title : ''}
            items={props.tableCard ? props.tableCard.items : []}
          />
          <Box width="100%" height="32px" />
        </Grid>
      </Grid>

      <Box height="50px" />
    </Container>
  );
};
