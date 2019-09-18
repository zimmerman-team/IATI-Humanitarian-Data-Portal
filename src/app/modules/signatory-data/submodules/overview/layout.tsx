/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import { DonutChartCard } from 'app/components/surfaces/Cards/DonutChartCard';
import { VerticalBarChartCard } from 'app/components/surfaces/Cards/VerticalBarChartCard';
import { List } from 'app/components/datadisplay/Lists';
import { OverviewLayoutModel } from 'app/modules/signatory-data/submodules/overview/model';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { mockData as inPageNavMock } from 'app/components/navigation/InPageNavigation/mock';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { DecoSigOverviewMidRight } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewMidRight';
import { DecoSigOverviewBottomRight } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewBottomRight';

/**
 * todo:'s
 * - refine layout
 * - refine styling
 * - create data model
 * - implement components
 * - make side menu functional
 * - make top menu functional
 */

export const OverviewLayout = (props: OverviewLayoutModel) => {
  return (
    <>
      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="0" left="0" zIndex="10000">
        <DecoSigOverviewTopLeft />
      </Box>
      {/* ---------- */}

      <Grid container>
        <Grid item xs={12}>
          <VerticalBarChartCard
            title="Activity Timeline"
            tooltip="Lorem ipsum dolor"
            data={props.activityTimelineData}
          />
        </Grid>
      </Grid>
      <Box height="50px" />

      {/** ---------------------------------------- */}
      {/** Humanitarian elements */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h4">
            Humanitarian elements
          </Typography>
        </Grid>
        {props.humanitarianElementsData.map(humEl => (
          <Grid item xs={12} md={6} key={humEl.activity}>
            <DonutChartCard value={humEl.value} activity={humEl.activity} />
          </Grid>
        ))}
      </Grid>
      <Box height="50px" />

      {/** ---------------------------------------- */}
      {/** Status */}
      <Grid container spacing={4} style={{ position: 'relative' }}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textPrimary">
            Status
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <List elName="incComms" items={props.statusData.slice(0, 2)} />
        </Grid>

        <Grid item xs={12} md={6}>
          <List elName="incComms" items={props.statusData.slice(2, 4)} />
        </Grid>
      </Grid>
      <Box height="50px" />

      {/** ---------------------------------------- */}
      <Grid container spacing={4}>
        {/** side menu

        - Activity Summary
        - FTS Import related
        - Grand Bargain classifications
        - Other classifications of intererest
        - Humanitarian results
        - Location information

        */}
        <Hidden mdDown>
          <Grid item xs={3}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <InPageNavigation lists={[]} />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        {/** ---------------------------------------- */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4} style={{ position: 'relative' }}>
            {/** 1 */}
            {/** Activity Summary */}
            <Grid item xs={12}>
              {/**
                  Activity Summary

                    - All actitives
                    - Humanitarian activities
                    - Current humanitarian activities
                */}

              <List valueHeaders {...props.activitySummaryData} />
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

              <List valueHeaders {...props.humActFTSData} />
              {/* ---------------------------------------- */}
              {/* decoration: mid right */}
              <Box position="absolute" top="-20px" right="-100px" zIndex="-1">
                <DecoSigOverviewMidRight />
              </Box>
              {/* ---------- */}
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

              <List valueHeaders {...props.humActwGBClassificationsData} />
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

              <List valueHeaders {...props.humOtherClassOfInterestData} />
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

              <List valueHeaders {...props.humResultsData} />
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

              <List valueHeaders {...props.humActWLocationInfoData} />
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

              <List valueHeaders {...props.humActWMultiYearFundData} />
            </Grid>

            {/** 8 */}
            {/** Financial reporting */}
            <Grid item xs={12} style={{ position: 'relative' }}>
              {/**
                  Financial reporting

                    - Default currency
                    - Reports to UN OCHA Financial Tracking Service (FTS)
                    - Reports to UN OCHA For FTS via IATI
                    - Reports to European Union (EDRIS)
                    - Coverage for [2019]

                */}

              <List {...props.financialReportingData} />

              {/* ---------------------------------------- */}
              {/* decoration: bottom right */}
              <Box position="absolute" bottom="-40px" right="-50px" zIndex="-1">
                <DecoSigOverviewBottomRight />
              </Box>
              {/* ---------- */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box height="100px" width="100%" />
    </>
  );
};
