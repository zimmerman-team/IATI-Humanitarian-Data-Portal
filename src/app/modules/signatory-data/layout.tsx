/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';
import { SignatoryDataModel } from './model';

export const SignatoryDataLayout = (props: SignatoryDataModel) => {
  return (
    <DebugBox>
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
                <Typography variant="body2">{signatory.gbSignatory}</Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </DebugBox>
  );
};
