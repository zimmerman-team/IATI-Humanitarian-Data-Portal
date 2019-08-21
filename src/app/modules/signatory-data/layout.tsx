/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { SignatoryDataModel } from './model';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';

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
          <Box bgcolor="white" width="100%" height="800px">
            {props.signatories.map(signatory => (
              <AppBarButton
                label={signatory.gbSignatory}
                url={`/signatory-data/${signatory.gbSignatory}/overview`}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
