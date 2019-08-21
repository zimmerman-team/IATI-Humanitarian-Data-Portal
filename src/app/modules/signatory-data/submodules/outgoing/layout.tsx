import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import { List } from 'app/components/datadisplay/Lists';
import { listMockData } from 'app/components/datadisplay/Lists/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutgoingModel } from './model';
import { InPageNavigation } from '../../../../components/navigation/InPageNavigation';
import { HorizontalBarChartCard } from '../../../../components/surfaces/Cards/HorizontalBarChartCard';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';

export const OutgoingLayout = (props: OutgoingModel) => {
  return (
    <Container>
      <SubmoduleHeader />
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
                {/** todo: add side menu */}
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
            {/** Outgoing pledges */}
            <Grid item xs={12}>
              {/**
                  Outgoing pledges

                    - Total no. of activities with Outgoing Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List
                title="Outgoing pledges"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 2 */}
            {/** Outgoing commitments */}
            <Grid item xs={12}>
              {/**
                  Outgoing commitments

                    - Total no. of activities with Outgoing Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                */}

              <List
                title="Outgoing commitments"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 3 */}
            {/** Outgoing funds */}
            <Grid item xs={12}>
              {/**
                  Outgoing funds

                    - Total no. of activities with Outgoing Pledges
                    - With funding provider details specified
                    - With funding organisation type provided
                    - With source traceability information
                */}

              <List
                title="Outgoing funds"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
