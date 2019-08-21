import React from 'react';
import { Page } from 'app/modules/common/Page';
import { Box, Grid } from '@material-ui/core';
import { FaqsPageModel } from './model';
import ExpansionPanel from '../../components/surfaces/ExpansionPanel';
import { Footer } from 'app/components/surfaces/Footer';

export const FaqsLayout = (props: FaqsPageModel) => {
  return (
    <>
      <Page title={props.title}>
        <Grid container>
          <ExpansionPanel questions={props.questions} />
        </Grid>
      </Page>
      <Box height="50px" width="100%" />
      <Footer />
    </>
  );
};
