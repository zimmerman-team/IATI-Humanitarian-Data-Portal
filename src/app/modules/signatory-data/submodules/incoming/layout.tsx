/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Box, Hidden } from '@material-ui/core';
import { List } from 'app/components/datadisplay/Lists';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import { IncomingModel } from './model';

export const IncomingLayout = (props: IncomingModel) => {
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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <InPageNavigation
                  locations={props.inPageNavigation.locations}
                />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/** 1 */}
            {/** Incoming pledges */}
            <Grid item xs={12}>
              {/**
                  Incoming pledges

                    - Total no. of activities with Incoming Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List valueHeaders {...props.lists[0]} />
            </Grid>

            {/** 2 */}
            {/** Incoming commitments */}
            <Grid item xs={12}>
              {/**
                  Incoming commitments

                    - Total no. of activities with Incoming Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List valueHeaders {...props.lists[1]} />
            </Grid>

            {/** 3 */}
            {/** Incoming funds */}
            <Grid item xs={12}>
              {/**
                  Incoming funds

                    - Total no. of activities with Incoming Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                    - With source traceability information
                */}

              <List valueHeaders {...props.lists[2]} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
