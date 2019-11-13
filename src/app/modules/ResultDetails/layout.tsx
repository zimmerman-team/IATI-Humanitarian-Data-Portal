import React from 'react';

/* components */
import { SimpleHeader } from 'app/components/headers/SimpleHeader';
import { Box, Container } from '@material-ui/core';
import { TableCardContainer } from 'app/components/datadisplay/NavLists';

/* models */
import { ResultDetailModel } from 'app/modules/ResultDetails/model';

export const ResultDetailLayout = (props: ResultDetailModel) => (
  <Container maxWidth="lg">
    <SimpleHeader title={props.title} description={props.description} />
    <Box height="144px" width="100%" />
    <TableCardContainer dontShow lists={props.lists} />
  </Container>
);
