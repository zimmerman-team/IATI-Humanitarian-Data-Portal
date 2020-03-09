import React from 'react';

// Model
import { ActivityDetailModel } from 'app/modules/activityDetails/model';

// Components
import { TableWTotal } from 'app/components/datadisplay/TableWTotal';
import { Grid, Typography, Box, Container, Hidden } from '@material-ui/core';
import { ActivityHeaderLayout } from 'app/modules/activityDetails/common/activityHeader';

// Mock Data
import { TableCard } from 'app/components/datadisplay/Lists/variants/TableCard';
import { TableCardContainer } from 'app/components/datadisplay/NavLists';
import { DecoDetailTopLeft } from './common/decoration/DecoDetailTopLeft';
import { DecoDetailMidRight } from './common/decoration/DecoDetailMidRight';
import { DecoDetailMidLeft } from './common/decoration/DecoDetailMidLeft';

export const ActivityDetailsLayout = (props: ActivityDetailModel) => {
  return (
    <Container maxWidth="lg">
      {/** --------------------------------------------------------------------------- */}
      {/** Decoration */}
      <Hidden smDown>
        <Box position="absolute" top="0" left="0" zIndex="-1">
          <DecoDetailTopLeft data-testid="DecoDetailTopLeft" />
        </Box>

        <Box position="absolute" top="180px" right="0" zIndex="-1">
          <DecoDetailMidRight data-testid="DecoDetailMidRight" />
        </Box>

        <Box position="absolute" top="158px" left="0">
          <DecoDetailMidLeft data-testid="DecoDetailMidLeft" />
        </Box>
      </Hidden>

      {/** --------------------------------------------------------------------------- */}
      {/** Header Section */}
      <Grid item xs={12}>
        <ActivityHeaderLayout
          activity={props.header.activity}
          organisation={props.header.organisation}
        />
      </Grid>

      <Box width="100%" height="91px" />
      {/** --------------------------------------------------------------------------- */}
      {/** Section1 */}

      <Grid container item md={9}>
        <Typography variant="subtitle1">{props.sections[0].title}</Typography>
        <Box width="100%" height="25px" />
        <Typography variant="body1">{props.sections[0].content}</Typography>
      </Grid>

      <Box width="100%" height="91px" />

      {/** --------------------------------------------------------------------------- */}
      {/** Tables */}

      <Grid container item md={12}>
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

      <Box height="112px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** List */}

      <TableCardContainer dontShow={false} lists={props.lists} />
      {/** --------------------------------------------------------------------------- */}
      {/** Results */}
      {props.tableCard &&
        props.tableCard.items &&
        props.tableCard.items.length > 0 && (
          <div id="results">
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
          </div>
        )}

      <Box height="50px" />
    </Container>
  );
};
