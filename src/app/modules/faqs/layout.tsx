import React from 'react';
import { Page } from 'app/modules/common/Page';
import { Box, Grid } from '@material-ui/core';
import { FaqsPageModel } from './model';
import ExpansionPanel from 'app/components/surfaces/ExpansionPanel';
import { Footer } from 'app/components/surfaces/Footer';
import { DecoFaqTopLeft } from 'app/modules/faqs/common/decoration/DecoFaqTopLeft';
import { DecoFaqTopRight } from 'app/modules/faqs/common/decoration/DecoFaqTopRight';

export const FaqsLayout = (props: FaqsPageModel) => {
  return (
    <>
      <Box position="absolute" top="0" left="0" zIndex="10000">
        <DecoFaqTopLeft data-testid="DecoFaqTopLeft" />
      </Box>

      <Box position="absolute" top="145px" right="0" zIndex="-1">
        <DecoFaqTopRight data-testid="DecoFaqTopRight" />
      </Box>
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
