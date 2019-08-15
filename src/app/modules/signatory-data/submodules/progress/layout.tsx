import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import React from 'react';
import { InsertLink } from '@material-ui/icons';
import { SignatoryNavigation } from 'app/components/navigation/Signatory Navigation';
import { locations } from 'app/components/navigation/Signatory Navigation/mock';

export const ProgressLayout = () => {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item xs={6} md={6}>
          <Typography variant="h3">Aggregated signatory progress</Typography>
        </Grid>
        <Box>
        <Grid item xs={6} md={6}>
          <Typography>The Grand Bargain transparency workstream uses the following IATI publishing indicators for the workstream core commitment target results andIndicators (CCTRIs). The aim of these indicators is to track the improvement in the quality and usability of the IATI data published by the Grand Bargain signatories.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};