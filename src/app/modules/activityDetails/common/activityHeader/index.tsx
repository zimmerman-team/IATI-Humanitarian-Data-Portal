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
        <Grid item md={12}>
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
      </Grid>
      {/** --------------------------------------------------------------------------- */}
      {/** Header */}
      <Grid container>
        <Grid item md={12}>
          <Typography
            variant="overline"
            color="textPrimary"
            data-testid="organisation"
          >
            {props.organisation.name} {props.organisation.code}
            <br />
            {props.organisation.type}
          </Typography>
          <Box height="24px" width="100%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="textPrimary" data-testid="title">
            {props.activity.title}
          </Typography>
          <Box height="24px" width="100%" />
        </Grid>
        <Grid item md={12}>
          <div
            css={`
              display: flex;
              flex-direction: row;
            `}
          >
            {/* identier */}
            <div
              css={`
                margin-right: 58px;
                display: flex;
                align-items: center;
              `}
            >
              <Typography
                variant="overline"
                color="textPrimary"
                data-testid="activity-code"
              >
                {props.activity.code}
              </Typography>
            </div>

            {/* dates container*/}
            <div
              css={`
                display: flex;
                flex-direction: row;
                align-items: center;
              `}
            >
              <Typography
                variant="overline"
                color="textPrimary"
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  marginRight: '8px',
                }}
              >
                Activity dates
              </Typography>

              <Typography
                variant="overline"
                color="textPrimary"
                style={{ textTransform: 'capitalize' }}
                data-testid="dates"
              >
                {props.activity.startDate} to {props.activity.endDate}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
