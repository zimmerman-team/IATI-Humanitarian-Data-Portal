import React from 'react';
import { Page } from 'app/modules/common/Page';
import { Box, Grid } from '@material-ui/core';
import { FaqsPageModel } from './model';
import ExpansionPanel from '../../components/surfaces/ExpansionPanel';

export const FaqsLayout = (props: FaqsPageModel) => {
  return (
    <Page title={props.title}>
      <Box height="48px" />
      <Grid container>
        <ExpansionPanel questions={props.questions} />
      </Grid>
      {/* TODO: add footer component after MLT-263 has been merged */}
    </Page>
  );
};
