/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { SignatoryProgressModel } from 'app/modules/signatory-progress/model';
import { LineChartCard } from 'app/components/surfaces/Cards/LineChartCard';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import TableModule from 'app/components/datadisplay/Table';
import parse from 'html-react-parser';
import { DecoSigProgTopLeft } from 'app/modules/signatory-progress/common/decoration/DecoSigProgTopLeft';
import { DecoSigProgTopRight } from 'app/modules/signatory-progress/common/decoration/DecoSigProgTopRight';
import { DecoSigProgBottomRight } from 'app/modules/signatory-progress/common/decoration/DecoSigProgBottomRight';
import { DecoSigProgMidLeft } from 'app/modules/signatory-progress/common/decoration/DecoSigProgMidLeft';

export const SignatoryProgressLayout = (props: SignatoryProgressModel) => {
  return (
    <Container maxWidth="lg">
      {/* -------------------------------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="10px" left="10px" zIndex="10000">
        <DecoSigProgTopLeft />
      </Box>
      {/* -------------------------------------------------------------- */}

      {/* -------------------------------------------------------------- */}
      {/* decoration: mid left */}
      <Box position="absolute" top="200px" left="0">
        <DecoSigProgMidLeft />
      </Box>
      {/* -------------------------------------------------------------- */}

      {/* -------------------------------------------------------------- */}
      {/* decoration: bottom right */}
      <Box position="fixed" bottom="0" right="0">
        <DecoSigProgBottomRight />
      </Box>
      {/* -------------------------------------------------------------- */}

      <Grid container>
        {/* -------------------------------------------------------------- */}
        {/* description */}
        <Grid item lg={8} md={12} style={{ position: 'relative' }}>
          {/* -------------------------------------------------------------- */}
          {/* decoration: top right */}
          <Box position="absolute" top="125px" right="-405px">
            <DecoSigProgTopRight />
          </Box>
          {/* -------------------------------------------------------------- */}
          <Typography variant="h3">{props.title}</Typography>
          <Box height="calc(64px - 16px)" width="100%" />
          <Typography variant="body1">{parse(props.description)}</Typography>
        </Grid>

        <Box height="calc(112px - 16px)" width="100%" />

        <Grid item lg={12} md={12} style={{ zIndex: 1001 }}>
          {/* -------------------------------------------------------------- */}
          {/* Data Publication Aggregated Signatory Progress */}
          <LineChartCard
            colors="multi"
            title={props.lineChartCardData.title}
            values={props.lineChartCardData.values}
          />
          {/* -------------------------------------------------------------- */}

          <Box height="64px" width="100%" />

          {/* -------------------------------------------------------------- */}
          {/* Signatories meeting Data Publication CCTRIs */}
          <HorizontalBarChartCard
            colors="multi"
            title={props.horizontalBarChartCardData.title}
            data={props.horizontalBarChartCardData.data}
          />
          {/* -------------------------------------------------------------- */}

          <Box height="64px" width="100%" />

          {/* -------------------------------------------------------------- */}
          {/* Aggregated Signatory Data Publication Indicator Values */}
          <TableModule
            changeTableRowColor={2}
            title={props.tableChartData.title}
            options={props.tableChartData.options}
            data={props.tableChartData.data}
            columns={props.tableChartData.columns}
            columnsCell={props.tableChartData.columnsCell}
          />
          {/* -------------------------------------------------------------- */}

          <Box height="28px" width="100%" />

          <Typography variant="caption">
            * An organisation is either the Signatory itself or at least one of
            its agencie or its affiliatess that is currently publishing to IATI
          </Typography>
        </Grid>
        <Box width="100%" height="200px" />
      </Grid>
    </Container>
  );
};
