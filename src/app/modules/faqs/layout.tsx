import React from 'react';
import { Page } from 'app/modules/common/Page';
import { Box, Grid } from '@material-ui/core';
import { FaqsPageModel } from './model';
import ExpansionPanel from 'app/components/surfaces/ExpansionPanel';
import { Footer } from 'app/components/surfaces/Footer';

export const FaqsLayout = (props: FaqsPageModel) => {
  return (
    <>
      <Page title={props.title} footer>
        <Grid container>
          <ExpansionPanel faqItems={props.faqItems} />
        </Grid>
      </Page>
      <Box height="40px" width="100%" />
      <Footer />
    </>
  );
};
