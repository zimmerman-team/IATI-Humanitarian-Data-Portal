/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import { DonutChartCard } from 'app/components/surfaces/Cards/DonutChartCard';
import { VerticalBarChartCard } from 'app/components/surfaces/Cards/VerticalBarChartCard';
import { List } from 'app/components/datadisplay/Lists';
import { OverviewLayoutModel } from 'app/modules/signatory-data/submodules/overview/model';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { sigDataOverviewNavItems } from 'app/modules/signatory-data/submodules/overview/mock';
import { ActivitySummaryFragment } from 'app/modules/signatory-data/submodules/overview/fragments/ActivitySummary';
import { FtsImportRelated } from 'app/modules/signatory-data/submodules/overview/fragments/FtsImportRelated';
import { GBClass } from 'app/modules/signatory-data/submodules/overview/fragments/GBClass';
import { OtherClass } from 'app/modules/signatory-data/submodules/overview/fragments/OtherClass';
import { Humanitarian } from 'app/modules/signatory-data/submodules/overview/fragments/Humanitarian';
import { LocationInformation } from 'app/modules/signatory-data/submodules/overview/fragments/LocationInformation';
import { MultiyearFunding } from 'app/modules/signatory-data/submodules/overview/fragments/MultiyearFunding';
import { FinancialReporting } from 'app/modules/signatory-data/submodules/overview/fragments/FinancialReporting';
import { ScrollToTop } from 'app/utils/scrollToTop';

export const OverviewLayout = (props: OverviewLayoutModel) => {
  return (
    <>
      <ScrollToTop />
      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Hidden smDown>
        <Box position="absolute" top="0" left="0" zIndex="10002">
          <DecoSigOverviewTopLeft />
        </Box>
      </Hidden>
      {/* ---------- */}

      <Grid container>
        <Grid item xs={12}>
          <VerticalBarChartCard
            title="Activity timeline"
            tooltip="activity timeline"
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
          <Box height="10px" />
          <Typography color="textPrimary" variant="body1">
            Please note that publishing organisations are not generally expected
            to reach a value of 100% for those elements marked with an *
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
          <List elName="incComms" items={props.statusData.slice(0, 1)} />
        </Grid>

        <Grid item xs={12} md={6}>
          <List elName="incComms" items={props.statusData.slice(1, 3)} />
        </Grid>
      </Grid>
      <Box height="50px" />

      {/** ---------------------------------------- */}

      {/** side nav */}

      <Grid container spacing={4}>
        <Hidden mdDown>
          <Grid item xs={3}>
            <div
              css={`
                position: sticky;
                top: 50px;
                height: 400px;
              `}
            >
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <InPageNavigation lists={sigDataOverviewNavItems.lists} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Hidden>

        {/** ---------------------------------------- */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4} style={{ position: 'relative' }}>
            {/** 1 */}
            {/** Activity Summary */}

            {/*<Element name={'summary'} key={`act-element-${0}`}>*/}
            <ActivitySummaryFragment
              activitySummaryData={props.activitySummaryData}
            />
            {/*</Element>*/}

            {/** 2 */}
            {/** Hum. activities with FTS Import related */}
            <FtsImportRelated humActFTSData={props.humActFTSData} />

            {/** 3 */}
            {/** Hum. activity with Grand Bargain classifications */}
            <GBClass
              humActwGBClassificationsData={props.humActwGBClassificationsData}
            />

            {/** 4 */}
            {/** Hum. other classifications of intererest */}
            <OtherClass
              humOtherClassOfInterestData={props.humOtherClassOfInterestData}
            />

            {/** 5 */}
            {/** Humanitarian results */}
            {/* <Humanitarian humResultsData={props.humResultsData} /> */}

            {/** 6 */}
            {/** Hum. activites with location information */}
            <LocationInformation
              humActWLocationInfoData={props.humActWLocationInfoData}
            />

            {/** 7 */}
            {/** Hum. acitivites with multi-year funding */}
            {/* <MultiyearFunding
              humActWMultiYearFundData={props.humActWMultiYearFundData}
            /> */}

            {/** 8 */}
            {/** Financial reporting */}
            <FinancialReporting
              financialReportingData={props.financialReportingData}
            />
          </Grid>
        </Grid>
      </Grid>
      <Box height="100px" width="100%" />
    </>
  );
};
