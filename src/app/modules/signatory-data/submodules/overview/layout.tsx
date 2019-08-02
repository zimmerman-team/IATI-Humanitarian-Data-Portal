/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';

/**
 * todo:'s
 * - refine layout
 * - implement responsiveness
 * - refine styling
 * - create data model
 * - implement components
 * - make side menu functional
 * - make top menu functional
 */

export const OverviewLayout = () => {
  return (
    <Container>
      {/** Breadcrumb */}
      <Grid container>
        {/** todo: add breadcrumb component */}
        <Typography variant="body2">Signatory Data / ActionAid UK</Typography>
      </Grid>
      {/** Header */}
      <Grid container>
        <Grid item xs={6}>
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
              <Typography variant="body1" color="secondary">
                {/**  todo: add link icon and make link of text */}
                Publisher Supplementary Information
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {/** todo: add navigation 
        - Overview 
        - Activity List
        - Incoming transactions
        - Providers
        - Outgoing transactions
        - Recipents
        - Timeliness
        - Coverage
        */}
          <Box width="100%" height="80px" bgcolor="white" />
        </Grid>
      </Grid>
      <Box height="50px" />
      {/** Activity Timeline */}
      <Grid container>
        <Grid item xs={12}>
          <Box width="100%" height="500px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              Activity timeline
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box height="50px" />
      {/** Humanitarian elements */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h4">
            Humanitarian elements
          </Typography>
        </Grid>

        {/** 1 */}
        {/** Hum. activities with UN HRP codes */}
        <Grid item xs={6}>
          <Box width="100%" height="225px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              Hum. activities with UN HRP codes
            </Typography>
          </Box>
        </Grid>

        {/** 2 */}
        {/** Hum. activities with Cluster codes */}
        <Grid item xs={6}>
          <Box width="100%" height="225px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              Hum. activities with Cluster codes
            </Typography>
          </Box>
        </Grid>

        {/** 3 */}
        {/** Hum. activities Glide codes */}
        <Grid item xs={6}>
          <Box width="100%" height="225px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              Hum. activities Glide codes
            </Typography>
          </Box>
        </Grid>

        {/** 4 */}
        {/** % of activities with both humanitarian indicator and also a valid
              humanitarian sector code */}
        <Grid item xs={6}>
          <Box width="100%" height="225px" bgcolor="white">
            <Typography color="textPrimary" variant="h6">
              % of activities with both humanitarian indicator and also a valid
              humanitarian sector code
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box height="50px" />
      {/** Status */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textPrimary">
            Status
          </Typography>
        </Grid>

        {/** Status 1 */}
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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

      <Grid container spacing={4}>
        {/** side menu 
        
        - Activity Summary
        - FTS Import related
        - Grand Bargain classifications
        - Other classifications of intererest
        - Humanitarian results
        - Location information
        
        */}
        <Grid item xs={3}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {/** todo: add side menu */}
              <Box width="100%" height="300px" bgcolor="white" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9}>
          <Grid container spacing={4}>
            {/** 1 */}
            {/** Activity Summary */}
            <Grid item xs={12}>
              <Box width="100%" height="300px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Activity Summary
                  {/**
                    - All actitives
                    - Humanitarian activities
                    - Current humanitarian activities
                */}
                </Typography>
              </Box>
            </Grid>

            {/** 2 */}
            {/** Hum. activities with FTS Import related */}
            <Grid item xs={12}>
              <Box width="100%" height="450px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Hum. activities with FTS Import related
                  {/**
                    - Activities with humanitarian OECD DAC sector code 700 or 70000 range
                    - With humanitarian indicator
                    - With UN Humanitarian Response Plan(s)
                    - With GLIDE code(s)
                    - With organisation's own internal crisis codes (ie using vocab '99' )
                    - With clusters
                 */}
                </Typography>
              </Box>
            </Grid>

            {/** 3 */}
            {/** Hum. activity with Grand Bargain classifications */}
            <Grid item xs={12}>
              <Box width="100%" height="350px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Hum. activity with Grand Bargain classifications
                  {/**
                    - Earmarked for Grand Bargain (Categories)
                    - Earmarked for Grand Bargain (Modalities)
                    - Where a Partner Country Based NGO is referenced
                    - Cash transfer (Not yet available in IATI Standard)
                */}
                </Typography>
              </Box>
            </Grid>

            {/** 4 */}
            {/** Hum. other classifications of intererest */}
            <Grid item xs={12}>
              <Box width="100%" height="350px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Hum. other classifications of intererest
                  {/**
                    - OECD DAC sector codes
                    - OECD DAC aid types
                    - Sustainable Development Goals (SDGs)
                    - OECD DAC gender marker
                */}
                </Typography>
              </Box>
            </Grid>

            {/** 5 */}
            {/** Humanitarian results */}
            <Grid item xs={12}>
              <Box width="100%" height="350px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Humanitarian results
                  {/** 
                    - Activities with results
                    - With results documents links
                    - With result indicators with baseline and target values
                    - With result indicator documents links
                 */}
                </Typography>
              </Box>
            </Grid>

            {/** 6 */}
            {/** Hum. activites with location information */}
            <Grid item xs={12}>
              <Box width="100%" height="300px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Hum. activites with location information
                  {/**
                    - Activities with recipient countries
                    - With latitude / longitude coordinates
                    - Describing location according to a recognised geo-location gazetteer
                    - Using any other type of sub-national location data
                */}
                </Typography>
              </Box>
            </Grid>

            {/** 7 */}
            {/** Hum. acitivites with multi-year funding */}
            <Grid item xs={12}>
              <Box width="100%" height="300px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Hum. acitivites with multi-year funding
                  {/**
                    - Current hum. activities with duration > 24 months
                    - Current Hum. Activities > 24 months with budget exempt
                    - Current hum. activities > 24 months & budgets for > 'next' 12 months
                */}
                </Typography>
              </Box>
            </Grid>

            {/** 8 */}
            {/** Financial reporting */}
            <Grid item xs={12}>
              <Box width="100%" height="400px" bgcolor="white">
                <Typography color="textPrimary" variant="h6">
                  Financial reporting
                  {/**
                    - Default currency
                    - Reports to UN OCHA Financial Tracking Service (FTS)
                    - Reports to UN OCHA For FTS via IATI
                    - Reports to European Union (EDRIS)
                    - Coverage for [2019]
                */}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
