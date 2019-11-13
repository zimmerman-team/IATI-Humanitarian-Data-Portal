/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Box, Hidden } from '@material-ui/core';
import { OutgoingModel } from './model';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import { OutgoingPledgesFragment } from 'app/modules/signatory-data/submodules/outgoing/fragments/OutgoingPledgesFragment';
import { IncomingCommitmentsFragment } from 'app/modules/signatory-data/submodules/outgoing/fragments/IncomingCommitmentsFragment';
import { OutgoingDisbursements } from 'app/modules/signatory-data/submodules/outgoing/fragments/OutgoingDisbursements';
import { ExpenditureFragment } from 'app/modules/signatory-data/submodules/outgoing/fragments/ExpenditureFragment';

export const OutgoingLayout = (props: OutgoingModel) => {
  return (
    <>
      {/** content */}

      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <HorizontalBarChartCard
            title={props.horizontalBarChartCardData.title}
            data={props.horizontalBarChartCardData.data}
          />
        </Grid>
      </Grid>

      <Box height="50px" width="100%" />
      <Grid container spacing={4}>
        {/** side menu

        - Activity Summary
        - FTS Import related
        - Grand Bargain classifications
        - Other classifications of intererest
        - Humanitarian results
        - Location information

        */}
        <Hidden smDown>
          <Grid item xs={3} lg={3}>
            <div
              css={`
                position: sticky;
                top: 50px;
                height: 400px;
              `}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} lg={12}>
                  {/** todo: add side menu */}
                  <InPageNavigation lists={props.lists} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9} lg={9}>
          <Grid container spacing={4}>
            {/* ---------------------------------------- */}
            {/** 1 */}
            {/** Outgoing pledges */}
            <OutgoingPledgesFragment lists={props.lists[0]} />

            {/* ---------------------------------------- */}
            {/** 2 */}
            {/** Incoming commitments */}
            <IncomingCommitmentsFragment lists={props.lists[1]} />

            {/* ---------------------------------------- */}
            {/** 3 */}
            {/** Outgoing disbursements */}
            <OutgoingDisbursements lists={props.lists[2]} />

            {/* ---------------------------------------- */}
            {/** 4 */}
            {/** Expenditure */}
            <ExpenditureFragment lists={props.lists[3]} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
