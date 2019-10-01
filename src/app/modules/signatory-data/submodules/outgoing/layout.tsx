/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Box, Hidden } from '@material-ui/core';
import { List } from 'app/components/datadisplay/Lists';
import { listMockData } from 'app/components/datadisplay/Lists/mock';
import { OutgoingModel } from './model';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import { DecoSignIncomingBottomRight } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSignIncomingBottomRight';

export const OutgoingLayout = (props: OutgoingModel) => {
  return (
    <>
      {/** content */}

      <Grid container spacing={4}>
        <Grid item md={12}>
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
          <Grid item xs={3}>
            <div
              css={`
                position: sticky;
                top: 50px;
                height: 400px;
              `}
            >
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  {/** todo: add side menu */}
                  <InPageNavigation lists={[]} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/* ---------------------------------------- */}
            {/** 1 */}
            {/** Outgoing pledges */}
            <Grid item xs={12}>
              {/**
                  Outgoing pledges

                    - Total no. of activities with Outgoing Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List valueHeaders {...props.lists[0]} />
            </Grid>

            {/* ---------------------------------------- */}
            {/** 2 */}
            {/** Outgoing commitments */}
            <Grid item xs={12}>
              {/**
                  Outgoing commitments

                    - Total no. of activities with Outgoing Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List valueHeaders {...props.lists[1]} />
            </Grid>

            {/* ---------------------------------------- */}
            {/** 3 */}
            {/** Outgoing funds */}
            <Grid item xs={12}>
              {/**
                  Outgoing disbursements

                    - Total no. of activities with Outgoing Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                    - With source traceability information
                */}

              <List valueHeaders {...props.lists[2]} />
            </Grid>

            {/* ---------------------------------------- */}
            {/** 4 */}
            {/** Expenditure */}
            <Grid item xs={12} style={{ position: 'relative' }}>
              {/**
                  Expenditure

                    - Total
                    - With funding provider details specified
                    - With funding organisation type provided
                    - With source traceability information
                */}

              <List valueHeaders {...props.lists[3]} />

              {/* ---------------------------------------- */}
              {/* decoration: bottom rightt */}
              <Box
                position="absolute"
                bottom="-200px"
                right="-100px"
                zIndex="-1"
              >
                <DecoSignIncomingBottomRight />
              </Box>
              {/* ---------- */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
