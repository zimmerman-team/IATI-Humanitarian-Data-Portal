/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import TableModule from 'app/components/datadisplay/Table';
import { mockDataVar7 } from 'app/components/datadisplay/Table/mock';
import styled from 'styled-components';
import { TimeLinessModel } from './model';
import { DecoSigTimelineTopLeft } from 'app/modules/signatory-data/submodules/timelines/common/decoration/DecoSigTimelineTopLeft';

const ContentTypographyLG = styled(props => <Typography {...props} />)`
  column-count: 2;
  column-gap: 6rem;
`;

export const TimelinesLayout = (props: TimeLinessModel) => {
  return (
    <>
      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="100px" left="0">
        <DecoSigTimelineTopLeft />
      </Box>
      {/* ---------- */}
      <Grid container spacing={4} direction="column">
        <Grid item md={6}>
          <Typography variant="h4">Publishing frequency</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1">
            The table records the number of days in each of the last twelve
            months on which the most recently recorded transaction date was
            observed by the Dashboard to have changed.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" align="right">
            Frequency Rating: Monthly
          </Typography>
          <Box width="100%" height="16px" />
          <TableModule
            title={mockDataVar7.title}
            data={mockDataVar7.data}
            columns={mockDataVar7.columns}
            options={mockDataVar7.options}
            columnsCell={mockDataVar7.columnsCell}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption">
            NB. The current month is also displayed for informational purposes,
            but is not used in the assessment.
          </Typography>
        </Grid>
      </Grid>

      <Box width="100%" height="100px" />

      <Grid container spacing={4} direction="column">
        <Grid item md={6}>
          <Typography variant="h4">Data timelag</Typography>
        </Grid>
        <Grid item xl={12}>
          <ContentTypographyLG variant="body1">
            The time-lag statistics attempt to assess how up to date the data is
            at the point that it is refreshed. For instance a publisher may
            refresh their data monthly, but the refreshed data is in fact three
            months old. Alternatively a publisher may only refresh their data
            once a year, but when they do it contains current data that is less
            than one month out of date. Transactions are the most numerous and
            most regularly refreshed elements in reported IATI activities and
            they are therefore used to make this assessment. The table of
            statistics shows the number of transaction dates reported in each of
            the last twelve calendar months.
          </ContentTypographyLG>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" align="right">
            Timelag value: Monthly
          </Typography>
          <Box width="100%" height="16px" />
          <TableModule
            title={mockDataVar7.title}
            data={props.timelagData}
            columns={mockDataVar7.columns}
            options={mockDataVar7.options}
            columnsCell={mockDataVar7.columnsCell}
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption">
            NB. The current month is also displayed for informational purposes,
            but is not used in the assessment.
          </Typography>
        </Grid>
      </Grid>
      <Box width="100%" height="50px" />
      <Grid container>
        <Grid item md={6}>
          <Typography variant="body2">
            NB. Frequency and Timelag calculated only using hum. transactions ie
            that relate to a hum activity or have been specifically marked as
            hum. The values below indicate when an update of published financial
            data was detected.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
