import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Table from 'app/components/datadisplay/Table/index';
import { ActivityListLayoutModel } from 'app/modules/signatory-data/submodules/activityList/model';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { DecoSigActiveBottomRight } from 'app/modules/signatory-data/submodules/activityList/common/decoration/DecoSigActiveBottomRight';
import { PageLoader } from 'app/modules/common/PageLoader';

export const ActivityListLayout = (props: ActivityListLayoutModel) => {
  return (
    <>
      {props.loading && <PageLoader />}
      {/* ---------------------------------------- */}
      {/* decoration: top left*/}
      <Box position="absolute" top="0" left="0" zIndex="10000">
        <DecoSigOverviewTopLeft />
      </Box>
      {/* ---------- */}

      <Grid container>
        <Grid item md={12} style={{ position: 'relative' }}>
          {/* ---------------------------------------- */}
          {/* Humanitarian activities */}
          <Table
            title={props.activity.title}
            data={props.activity.data}
            options={props.activity.options}
            columns={props.activity.columns}
            columnsCell={props.activity.columnsCell}
          />
          {/* ---------- */}

          {/* ---------------------------------------- */}
          {/* decoration: bottom right */}
          <Box position="absolute" bottom="-100px" right="-100px" zIndex="-1">
            <DecoSigActiveBottomRight />
          </Box>
          {/* ---------- */}
        </Grid>
      </Grid>
    </>
  );
};
