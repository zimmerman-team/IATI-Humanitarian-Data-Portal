/* eslint-disable react/jsx-max-depth */
import { Grid, Typography, Box } from '@material-ui/core';
import React from 'react';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import styled from 'styled-components';
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';

const LabelContainer = styled.div`
  margin-top: 2px;
  margin-left: 58px;
  margin-right: 8px;
`;

export const ActivityHeaderLayout = (props: ActivityDetailsHeaderCardModel) => {
  return (
    <>
      <Grid container>
        <BreadCrumbs
          currentLocation="Details Activity"
          previousLocations={[
            { url: '/signatory-data', label: 'Signatory Data' },
            {
              url: `/signatory-data/${props.organisation.code}/activity-list`,
              label: props.organisation.name,
            },
          ]}
        />
        <Box height="24px" width="100%" />
      </Grid>
      {/** --------------------------------------------------------------------------- */}
      {/** Header */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            {/** todo: style */}
            <Typography variant="overline" color="textPrimary">
              {props.organisation.name} {props.organisation.code}
            </Typography>
            <Typography variant="h3" color="textPrimary">
              {props.activity.title}
            </Typography>
            <Box height="14px" width="100%" />
            <Grid container direction="row">
              <Typography variant="overline" color="textPrimary">
                {props.activity.code}
              </Typography>
              <LabelContainer>
                <Typography variant="subtitle1" color="textPrimary">
                  Activity dates
                </Typography>
              </LabelContainer>
              <Typography variant="overline" color="textPrimary">
                {props.activity.startDate} {props.activity.endDate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
