import React from 'react';
import { Box, Grid, Hidden } from '@material-ui/core';
import Table from 'app/components/datadisplay/Table/index';
import { ActivityListLayoutModel } from 'app/modules/signatory-data/submodules/activityList/model';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import { DecoSigActiveBottomRight } from 'app/modules/signatory-data/submodules/activityList/common/decoration/DecoSigActiveBottomRight';
import { PageLoader } from 'app/modules/common/PageLoader';
import { VerticalScrollHelper } from 'app/components/datadisplay/Table/helpers';

export const ActivityListLayout = (props: ActivityListLayoutModel) => {
  return (
    <>
      {props.loading && <PageLoader />}
      {/* ---------------------------------------- */}
      {/* decoration: top left*/}
      <Hidden smDown>
        <Box position="absolute" top="0" left="0" zIndex="1">
          <DecoSigOverviewTopLeft />
        </Box>
      </Hidden>
      {/* ---------- */}

      <Grid container item>
        <Grid item xs={12}>
          {/* ---------------------------------------- */}
          {/* Humanitarian activities */}
          <VerticalScrollHelper>
            <Table
              title={props.activity.title}
              data={props.activity.data}
              options={props.activity.options}
              columns={props.activity.columns}
              columnsCell={props.activity.columnsCell}
            />
          </VerticalScrollHelper>
          {/* ---------- */}

          {/* ---------------------------------------- */}
          {/* decoration: bottom right */}
          <Hidden smDown>
            <Box position="absolute" bottom="-100px" right="-100px" zIndex="-1">
              <DecoSigActiveBottomRight />
            </Box>
          </Hidden>
          {/* ---------- */}
        </Grid>
      </Grid>
    </>
  );
};
