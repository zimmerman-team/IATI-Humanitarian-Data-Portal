/* eslint-disable react/jsx-max-depth */
import { Grid, Typography, Box } from '@material-ui/core';
import React from 'react';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import styled from 'styled-components';
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';

const DatesContainer = styled.div`
  display: flex;
`;

const DatesLabel = styled.div`
  margin-top: 3px;
  margin-right: 8px;
`;

const IdentifierContainer = styled.div`
  margin-right: 58px;
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
              <IdentifierContainer>
                <Typography variant="overline" color="textPrimary">
                  {props.activity.code}
                </Typography>
              </IdentifierContainer>
              <DatesContainer>
                <DatesLabel>
                  <Typography variant="subtitle1" color="textPrimary">
                    Activity dates
                  </Typography>
                </DatesLabel>
                <Typography variant="overline" color="textPrimary">
                  {props.activity.startDate} to {props.activity.endDate}
                </Typography>
              </DatesContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
