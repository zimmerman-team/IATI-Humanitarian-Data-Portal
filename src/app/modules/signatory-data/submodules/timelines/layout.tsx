/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import TableModule from 'app/components/datadisplay/Table';
import { mockDataVar7 } from 'app/components/datadisplay/Table/mock';
import styled from 'styled-components';
import { TimeLinessModel } from 'app/modules/signatory-data/submodules/timelines/model';
import { DecoSigTimelineTopLeft } from 'app/modules/signatory-data/submodules/timelines/common/decoration/DecoSigTimelineTopLeft';

// const ContentTypographyLG = styled(props => <Typography {...props} />)`
//   column-count: 2;
//   column-gap: 6rem;
// `;

const ColumnBox = styled.div`
  column-count: 2;
  column-gap: 6rem;
`;

export const TimelinesLayout = (props: TimeLinessModel) => {
  return (
    <>
      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Hidden smDown>
        <Box position="absolute" top="100px" left="0">
          <DecoSigTimelineTopLeft data-testid="DecoSigTimelineTopLeft" />
        </Box>
      </Hidden>
      {/* ---------- */}
      <Grid container spacing={4} direction="column">
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h4">
            <span>Publishing frequency</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body1">
            Publishing frequency measures how often an organisation updates
            their published IATI data. This is useful for any data user to know
            in order that they can assess how ‘useful’ the published information
            might be.
          </Typography>
          <Box width="100%" height="16px" />
          <Typography variant="body1">
            The table below shows the number of days for each month on which the
            published IATI dataset has been assessed as having been updated. An
            ‘update’ is recorded when a ‘more recent’ transaction date (than the
            ‘most recent’ previously identified by the portal) is detected.
          </Typography>
          <Box width="100%" height="16px" />
          <Typography variant="body1">
            The methodology for the calculation of frequency (although the
            portal uses humanitarian activities only) is documented on the{' '}
            <a
              href="http://publishingstats.iatistandard.org/timeliness.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              IATI dashboard
            </a>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" align="right">
            <span>{`Frequency rating: ${props.freqRating}`}</span>
          </Typography>
          <Box width="100%" height="16px" />

          <TableModule
            title={mockDataVar7.title}
            data={props.freqData}
            columns={mockDataVar7.columns}
            options={mockDataVar7.options}
            columnsCell={mockDataVar7.columnsCell}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="caption">
            NB. The current month is also displayed for informational purposes,
            but is not used in the assessment.
          </Typography>
        </Grid>
      </Grid>

      <Box width="100%" height="100px" />

      <Grid container spacing={4} direction="column">
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Data timelag</Typography>
        </Grid>
        <Grid item xs={12} xl={12}>
          <Typography variant="body1">
            The time-lag statistics assess how up to date the data is. For
            instance a publisher may update their data every month, but the
            updated data is in fact three months old. Alternatively a publisher
            may only update their data once a year, but when they do so it
            contains current data that is less than one month old.
          </Typography>
          <Box width="100%" height="16px" />
          <Typography variant="body1">
            Transactions are the most numerous and most regularly refreshed
            elements in reported IATI activities and they are therefore used to
            make this assessment. The table of statistics shows the number of
            transaction dates reported for each calendar month.
          </Typography>
          <Box width="100%" height="16px" />
          <Typography variant="body1">
            The methodology for the calculation of timelag (although the portal
            uses humanitarian activities only) is documented on the{' '}
            <a
              href="http://publishingstats.iatistandard.org/timeliness_timelag.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              IATI dashboard
            </a>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" align="right">
            <span>{`Timelag value: ${props.timeLagName}`}</span>
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
        <Grid item xs={12} md={12}>
          <Typography variant="caption">
            NB. The current month is also displayed for informational purposes,
            but is not used in the assessment.
          </Typography>
        </Grid>
      </Grid>
      <Box width="100%" height="50px" />
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="body2">
            NB. Frequency and Timelag calculated only using hum. transactions ie
            that relate to a hum activity or have been specifically marked as
            hum. The values below indicate when an update of published financial
            data was detected.
          </Typography>
        </Grid>
      </Grid>
      <Box width="100%" height="16px" />
    </>
  );
};
