/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import { DonutChartCard } from 'app/components/surfaces/Cards/DonutChartCard/index';
import { DebugBox } from 'app/utils/layout';
import { VerticalBarChartCard } from 'app/components/surfaces/Cards/VerticalBarChartCard/index';
import { dataMock } from 'app/components/charts/BarCharts/VerticalBarChart/mock';
import { List } from 'app/components/datadisplay/Lists';
import { listMockData } from 'app/components/datadisplay/Lists/mock';

/**
 * todo:'s
 * - refine layout
 * - refine styling
 * - create data model
 * - implement components
 * - make side menu functional
 * - make top menu functional
 */

const cardMockData = {
  activity: 'Hum. activities with UN HRP codes',
  value: 76,
};

export const OverviewLayout = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <VerticalBarChartCard
            data={dataMock.data}
            title="Activity Timeline"
            tooltip="Lorem ipsum dolor"
          />
        </Grid>
      </Grid>
      <Box height="50px" />
      {/** --------------------------------------------------------------------------- */}
      {/** Humanitarian elements */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h4">
            Humanitarian elements
          </Typography>
        </Grid>

        {/** 1 */}
        {/** Hum. activities with UN HRP codes */}
        <Grid item xs={12} md={6}>
          <DonutChartCard
            value={cardMockData.value}
            activity="Hum. activities with UN HRP codes"
          />
        </Grid>

        {/** 2 */}
        {/** Hum. activities with Cluster codes */}
        <Grid item xs={12} md={6}>
          <DonutChartCard
            value={cardMockData.value}
            activity="Hum. activities with Cluster codes"
          />
        </Grid>

        {/** 3 */}
        {/** Hum. activities Glide codes */}
        <Grid item xs={12} md={6}>
          <DonutChartCard
            value={cardMockData.value}
            activity="Hum. activities Glide codes"
          />
        </Grid>

        {/** 4 */}
        {/** % of activities with both humanitarian indicator and also a valid
              humanitarian sector code */}
        <Grid item xs={12} md={6}>
          <DonutChartCard
            value={cardMockData.value}
            activity="% of activities with both humanitarian indicator and also a valid
              humanitarian sector code"
          />
        </Grid>
      </Grid>
      <Box height="50px" />
      {/** --------------------------------------------------------------------------- */}
      {/** Status */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textPrimary">
            Status
          </Typography>
        </Grid>

        {/** Status 1 */}
        <Grid item xs={12} md={6}>
          <Box width="100%" height="175px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              Status 1
              {/**
                - Latest version of the IATI standard used: number
                - Activities with data errors: percentage
            */}
            </Typography>
          </Box>
        </Grid>

        {/** Status 2 */}
        <Grid item xs={12} md={6}>
          <Box width="100%" height="175px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              Status 2
              {/**
                - Latest update: date
                - Data first published: date
            */}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box height="50px" />

      {/** --------------------------------------------------------------------------- */}
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

        {/** --------------------------------------------------------------------------- */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/** 1 */}
            {/** Activity Summary */}
            <Grid item xs={12}>
              {/**
                  Activity Summary

                    - All actitives
                    - Humanitarian activities
                    - Current humanitarian activities
                */}

              <List
                title="Activity Summary"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 2 */}
            {/** Hum. activities with FTS Import related */}
            <Grid item xs={12}>
              {/**
                  Hum. activities with FTS Import related

                    - Activities with humanitarian OECD DAC sector code 700 or 70000 range
                    - With humanitarian indicator
                    - With UN Humanitarian Response Plan(s)
                    - With GLIDE code(s)
                    - With organisation's own internal crisis codes (ie using vocab '99' )
                    - With clusters

                */}

              <List
                title="Hum. activities with FTS Import related"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 3 */}
            {/** Hum. activity with Grand Bargain classifications */}
            <Grid item xs={12}>
              {/**
                  Hum. activity with Grand Bargain classifications

                    - Earmarked for Grand Bargain (Categories)
                    - Earmarked for Grand Bargain (Modalities)
                    - Where a Partner Country Based NGO is referenced
                    - Cash transfer (Not yet available in IATI Standard)

                */}

              <List
                title="Hum. activity with Grand Bargain classifications"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 4 */}
            {/** Hum. other classifications of intererest */}
            <Grid item xs={12}>
              {/** Hum. other classifications of intererest

                    - OECD DAC sector codes
                    - OECD DAC aid types
                    - Sustainable Development Goals (SDGs)
                    - OECD DAC gender marker

                */}

              <List
                title="Hum. other classifications of intererest"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 5 */}
            {/** Humanitarian results */}
            <Grid item xs={12}>
              {/**   Humanitarian results

                    - Activities with results
                    - With results documents links
                    - With result indicators with baseline and target values
                    - With result indicator documents links

                */}

              <List
                title="Humanitarian results"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 6 */}
            {/** Hum. activites with location information */}
            <Grid item xs={12}>
              {/**    Hum. activites with location information

                    - Activities with recipient countries
                    - With latitude / longitude coordinates
                    - Describing location according to a recognised geo-location gazetteer
                    - Using any other type of sub-national location data
               */}

              <List
                title="Hum. activites with location information"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 7 */}
            {/** Hum. acitivites with multi-year funding */}
            <Grid item xs={12}>
              {/**
                  Hum. acitivites with multi-year funding

                    - Current hum. activities with duration > 24 months
                    - Current Hum. Activities > 24 months with budget exempt
                    - Current hum. activities > 24 months & budgets for > 'next' 12 months

                */}

              <List
                title="Hum. acitivites with multi-year funding"
                subtitle={listMockData.subtitle}
                valueHeaders
                items={listMockData.items}
              />
            </Grid>

            {/** 8 */}
            {/** Financial reporting */}
            <Grid item xs={12}>
              {/**
                  Financial reporting

                    - Default currency
                    - Reports to UN OCHA Financial Tracking Service (FTS)
                    - Reports to UN OCHA For FTS via IATI
                    - Reports to European Union (EDRIS)
                    - Coverage for [2019]

                */}

              <List
                title="Financial reporting"
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
