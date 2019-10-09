/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Box, Hidden } from '@material-ui/core';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import { IncomingModel } from './model';
import { DecoSigIncomingTopLeft } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSigIncomingTopLeft';
import { IncomingPledgesFragment } from 'app/modules/signatory-data/submodules/incoming/fragments/IncomingPledgesFragment';
import { IncomingCommitmentsFragment } from 'app/modules/signatory-data/submodules/incoming/fragments/IncomingCommitmentsFragment';
import { IncomingFundsFragment } from 'app/modules/signatory-data/submodules/incoming/fragments/IncomingFundsFragment';

export const IncomingLayout = (props: IncomingModel) => {
  return (
    <>
      {/* content */}

      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="0" left="0" zIndex="10000">
        <DecoSigIncomingTopLeft data-testid="DecoSigIncomingTopLeft" />
      </Box>
      {/* ---------- */}

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
                  <InPageNavigation lists={props.lists} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/* ---------------------------------------- */}
            {/** Incoming pledges */}
            {/** 1 */}
            <IncomingPledgesFragment lists={props.lists[0]} />

            {/* ---------------------------------------- */}
            {/** Incoming commitments */}
            {/** 2 */}
            <IncomingCommitmentsFragment lists={props.lists[1]} />

            {/* ---------------------------------------- */}
            {/** Incoming funds */}
            {/** 3 */}
            <IncomingFundsFragment lists={props.lists[2]} />
          </Grid>
        </Grid>
      </Grid>
      <Box height="100px" width="100%" />
    </>
  );
};
