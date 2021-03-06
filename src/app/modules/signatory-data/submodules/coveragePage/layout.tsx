import React from 'react';
import { CoverageModel } from 'app/modules/signatory-data/submodules/coveragePage/model';
import TableModule from 'app/components/datadisplay/Table';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { Grid, Typography, Box, Hidden } from '@material-ui/core';

export const CoverageLayout = (props: CoverageModel) => {
  return (
    <>
      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Hidden smDown>
        <Box position="absolute" top="0" left="0" zIndex="1">
          <DecoSigOverviewTopLeft data-testid="DecoSigOverviewTopLeft" />
        </Box>
      </Hidden>
      {/* ---------- */}

      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={7}
          css={`
            position: relative;
            top: -25px;
          `}
        >
          <Typography variant="body2">
            The purpose of coverage is to enable any data user to know whether
            the publishing organisation is providing information about all of
            its humanitarian activities or if it is only publishing to IATI in
            relation to a subset of interventions.
            <p>
              Coverage is measured by comparing a self-reported but verifiable
              total of the publishing organisation’s available spend on
              humanitarian activities against the sum of all disbursement and
              expenditure transactions for humanitarian activities.
            </p>
          </Typography>
        </Grid>
      </Grid>
      <Box height="25px" />

      {/* ---------------------------------------- */}
      {/* Coverage data */}
      <TableModule
        title={props.tableData.title}
        columns={props.tableData.columns}
        columnsCell={props.tableData.columnsCell}
        data={props.tableData.data}
        options={props.tableData.options}
      />
      <Box height={'64px'} width={'100%'} />
      {/* ---------- */}
    </>
  );
};
