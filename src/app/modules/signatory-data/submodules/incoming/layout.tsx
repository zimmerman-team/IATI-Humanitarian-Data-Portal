/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Box, Hidden } from '@material-ui/core';
import { List } from 'app/components/datadisplay/Lists';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import { IncomingModel } from './model';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { DecoSignIncomingBottomRight } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSignIncomingBottomRight';
import { DecoSigIncomingTopLeft } from 'app/modules/signatory-data/submodules/incoming/common/decoration/DecoSigIncomingTopLeft';

export const IncomingLayout = (props: IncomingModel) => {
  return (
    <>
      {/* content */}

      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="0" left="0">
        <DecoSigIncomingTopLeft />
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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <InPageNavigation lists={props.lists} />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/* ---------------------------------------- */}
            {/** Incoming pledges */}
            {/** 1 */}
            <Grid item xs={12}>
              {/**
                  Incoming pledges

                    - Total no. of activities with Incoming Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List valueHeaders {...props.lists[0]} />
            </Grid>

            {/* ---------------------------------------- */}
            {/** Incoming commitments */}
            {/** 2 */}
            <Grid item xs={12}>
              {/**
                  Incoming commitments

                    - Total no. of activities with Incoming Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List valueHeaders {...props.lists[1]} />
            </Grid>

            {/* ---------------------------------------- */}
            {/** Incoming funds */}
            {/** 3 */}
            <Grid item xs={12} style={{ position: 'relative' }}>
              {/**
                  Incoming funds

                    - Total no. of activities with Incoming Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                    - With source traceability information
                */}

              <List valueHeaders {...props.lists[2]} />

              {/* ---------------------------------------- */}
              {/* decoration: top left */}
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
      <Box height="100px" width="100%" />
    </>
  );
};
