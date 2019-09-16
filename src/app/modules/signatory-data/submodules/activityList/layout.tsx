import React from 'react';
import { Grid } from '@material-ui/core';
import Table from 'app/components/datadisplay/Table/index';
import { ActivityListLayoutModel } from './model';

export const ActivityListLayout = (props: ActivityListLayoutModel) => {
  return (
    <>
      <Grid container>
        {/** --------------------------------------------------------------------------- */}
        {/** Table */}
        <Grid item xs={12}>
          <Table
            title={props.activity.title}
            data={props.activity.data}
            options={props.activity.options}
            columns={props.activity.columns}
            columnsCell={props.activity.columnsCell}
          />
        </Grid>
      </Grid>
    </>
  );
};
