/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { SignatoryProgressModel } from './model';
import { LineChartCard } from 'app/components/surfaces/Cards/LineChartCard';
import { HorizontalBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard';
import TableModule from 'app/components/datadisplay/Table';
import parse from 'html-react-parser';

export const SignatoryProgressLayout = (props: SignatoryProgressModel) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item lg={8} md={12}>
          <Typography variant="h3">{props.title}</Typography>
          <Box height="calc(64px - 16px)" width="100%" />
          <Typography variant="body1">{parse(props.description)}</Typography>
        </Grid>

        <Box height="calc(112px - 16px)" width="100%" />

        <Grid item lg={12} md={12}>
          <LineChartCard
            title={props.lineChartCardData.title}
            values={props.lineChartCardData.values}
          />

          <Box height="64px" width="100%" />

          <HorizontalBarChartCard
            title={props.horizontalBarChartCardData.title}
            data={props.horizontalBarChartCardData.data}
          />

          <Box height="64px" width="100%" />

          <TableModule
            title={props.tableChartData.title}
            options={props.tableChartData.options}
            data={props.tableChartData.data}
            columns={props.tableChartData.columns}
            columnsCell={props.tableChartData.columnsCell}
          />

          <Box height="28px" width="100%" />

          <Typography variant="caption">
            * An organisation is either the Signatory itself or at least one of
            its agencie or its affiliatess that is currently publishing to IATI
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
