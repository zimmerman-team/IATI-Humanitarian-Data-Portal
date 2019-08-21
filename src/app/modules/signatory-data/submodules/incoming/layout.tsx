/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import { InsertLink } from '@material-ui/icons';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import { List } from 'app/components/datadisplay/Lists';
import { listMockData } from 'app/components/datadisplay/Lists/mock';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';
export const IncomingLayout = () => {
  return (
<>

      {/** content */}

      <Grid container spacing={4}>
        <Grid item md={12}>
          <Box width="100%" height="335px" bgcolor="white" />
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
                <Box width="100%" height="300px" bgcolor="white" />
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

              <List
                title="Incoming pledges"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
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

              <List
                title="Incoming commitments"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
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

              <List
                title="Incoming funds"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
