/* eslint-disable react/jsx-max-depth */
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import React from 'react';
import { InsertLink } from '@material-ui/icons';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { SubmoduleHeaderLayoutModel } from 'app/modules/signatory-data/submodules/common/signatory-data-header/model';

export const SubmoduleHeaderLayout = (props: SubmoduleHeaderLayoutModel) => {
  return (
    <>
      <Grid container>
        <BreadCrumbs
          currentLocation={props.organisationName}
          previousLocations={[
            { url: '/signatory-data', label: 'Signatory Data' },
          ]}
        />
        <Box height="24px" width="100%" />
      </Grid>
      {/** --------------------------------------------------------------------------- */}
      {/** Header */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Typography variant="h3" color="textPrimary">
              {props.organisationName}
            </Typography>
            {/** todo: style */}
            <Typography variant="overline" color="textPrimary">
              {props.code} | {props.yearRange}
            </Typography>
            {/** todo: style */}
            <Typography
              variant="overline"
              style={{ textTransform: 'none' }}
              color="textPrimary"
            >
              *earliest and latest activity start dates
            </Typography>

            <Box height="14px" width="100%" />

            <Grid container>
              <InsertLink color="secondary" />
              <Box width="5px" />
              <Typography variant="body1" color="secondary">
                {/**  todo: add link icon and make link of text */}
                Publisher Supplementary Information
              </Typography>
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
