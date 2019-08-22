/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
// import { SignatoryProgressModel } from './model';

export const SignatoryProgressLayout = (/* props: SignatoryProgressModel */) => {
  return (
    <Container maxWidth="lg">
      <AppBarButton
        label="CCTRIs Target"
        url="/signatory-progress/cctri-target"
      />
    </Container>
  );
};
