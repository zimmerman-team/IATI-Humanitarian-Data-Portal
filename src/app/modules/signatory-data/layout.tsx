/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { SignatoryDataModel } from './model';
import TableModule from 'app/components/datadisplay/Table';
import { mockDataVar2 } from 'app/components/datadisplay/Table/mock';

export const SignatoryDataLayout = (props: SignatoryDataModel) => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="column">
        <Grid item xs={6}>
          <Typography variant="h3">{props.title}</Typography>
          <Box height="50px" />
          <Typography variant="body2">{props.description}</Typography>
        </Grid>
      </Grid>
      <Box height="50px" />
      <Grid container>
        <Grid item xs={12}>
          <TableModule {...mockDataVar2} data={props.signatories} />
        </Grid>
      </Grid>
    </Container>
  );
};
