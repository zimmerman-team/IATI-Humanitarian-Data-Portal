import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import { SignatoryDataModel } from 'app/modules/signatory-data/model';
import TableModule from 'app/components/datadisplay/Table';
import { PageLoader } from 'app/modules/common/PageLoader';
import { DecoSigDataTopLeft } from 'app/modules/signatory-data/common/decoration/DecoSigDataTopLeft';
import parse from 'html-react-parser';

export const SignatoryDataLayout = (props: SignatoryDataModel) => {
  return (
    <Container maxWidth="lg">
      {/* ------------------------------------------------------------------ */}
      {/* decoration: top left */}

      {/*
      todo: @juan, there was a merge conflict; which fragment is supposed to be used? the smDown or the mdDown?

      <Hidden smDown>
        <Box position="absolute" top="0" left="0">

        */}
      <Hidden mdDown>
        <Box position="absolute" top="0" left="0" zIndex="-1">
          <DecoSigDataTopLeft data-testid="DecoSigDataTopLeft" />
        </Box>
      </Hidden>
      {/* ------------------------------------------------------------------ */}
      {props.loading && <PageLoader />}
      <Grid container direction="column">
        <Grid item xs={12} md={7}>
          <Typography variant="h3">{props.title}</Typography>
          <Box height="50px" />
          <Typography variant="body2">{parse(props.description)}</Typography>
        </Grid>
      </Grid>
      <Box height="50px" />
      <Grid container>
        <Grid item xs={12}>
          <div id="sig-data-table">
            <TableModule {...props.sigTable} />
          </div>
        </Grid>
      </Grid>
      <Box height="20px" />
      <Typography variant="caption">
        * NA stands for Not Applicable because Government donors are generally
        at the start of the funding chain
      </Typography>
      <Box height="50px" />
    </Container>
  );
};
