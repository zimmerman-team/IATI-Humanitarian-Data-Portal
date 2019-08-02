import React from 'react';
import { Grid } from '@material-ui/core';
import { Row } from 'react-styled-flexboxgrid';
import { Stat } from 'app/modules/landing/common/StatContainer/Stat';
import { StateContainerModel } from 'app/modules/landing/common/StatContainer/models';

export const StatContainer = (props: StateContainerModel) => {
  return (
    <Grid container direction="row" spacing={2}>
      {props.items.map(item => (
        <Grid item md={3}>
          <Stat description={item.description} value={item.value} />
        </Grid>
      ))}
    </Grid>
  );
};
