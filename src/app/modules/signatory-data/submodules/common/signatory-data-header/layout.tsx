/* eslint-disable react/jsx-max-depth */
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import React from 'react';
import { InsertLink } from '@material-ui/icons';
import { SignatoryNavigation } from 'app/components/navigation/SignatoryNavigation';
import { SubNavItemRegularMock } from 'app/components/navigation/SignatoryNavigation/mock';
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
              {decodeURIComponent(props.code)} | {props.yearRange}
            </Typography>
            {/** todo: style */}
            <Typography
              variant="overline"
              style={{ textTransform: 'none' }}
              color="textPrimary"
            >
              earliest and latest activity start dates
            </Typography>

            <Box height="14px" width="100%" />

            <Grid container>
              <InsertLink color={props.suppLink ? 'secondary' : 'disabled'} />
              <Box width="5px" />
              <Typography
                variant="body1"
                color={props.suppLink ? 'secondary' : 'textSecondary'}
              >
                {props.suppLink ? (
                  <a
                    href={props.suppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.linkText}
                  </a>
                ) : (
                  props.linkText
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Box height="50px" width="100%" />
        </Hidden>
        {/*Helper Grid Item*/}
        <Grid item xs={1} md={1} sm={1} />

        <Grid item xs={11} sm={11} md={5} justify="flex-end">
          {/* implement conditional here that differentiates between organisation types */}
          <SignatoryNavigation
            activity={props.code}
            items={SubNavItemRegularMock.items}
          />
        </Grid>
      </Grid>
      <Box height="50px" width="100%" />
    </>
  );
};
