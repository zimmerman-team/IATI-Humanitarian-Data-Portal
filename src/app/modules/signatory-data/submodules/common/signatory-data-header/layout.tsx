/* eslint-disable react/jsx-max-depth */
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import React from 'react';
import { InsertLink } from '@material-ui/icons';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';

export const SubmoduleHeaderLayout = () => {
  return (
    <>
      <Grid container>
        <BreadCrumbs
          currentLocation="ActionAid UK"
          previousLocations={[
            { url: '/signatory-data', label: 'Signatory Data' },
          ]}
        />
      </Grid>
      {/** --------------------------------------------------------------------------- */}
      {/** Header */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h3" color="textPrimary">
                ActionAid UK
              </Typography>
            </Grid>
            <Grid item>
              {/** todo: style */}
              <Typography variant="body2" color="textPrimary">
                GB-CHC-274467 2017-2019
              </Typography>
            </Grid>
            <Grid item>
              {/** todo: style */}
              <Typography variant="body2" color="textPrimary">
                *earliest and latest activity start dates
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <InsertLink color="secondary" />
                </Grid>
                <Box width="5px" />
                <Grid item>
                  <Typography variant="body1" color="secondary">
                    {/**  todo: add link icon and make link of text */}
                    Publisher Supplementary Information
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Box height="50px" width="100%" />
        </Hidden>
        <Grid item xs={12} md={6}>


          <SignatoryNavigation
            locations={locations.locations}
            activity={locations.activity}
          />
        </Grid>
      </Grid>
      <Box height="50px" width="100%" />
    </>
  );
};
