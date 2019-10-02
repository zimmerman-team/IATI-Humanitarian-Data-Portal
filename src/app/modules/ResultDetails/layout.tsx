import React from 'react';

/* components */
import { SimpleHeader } from 'app/components/headers/SimpleHeader';
import { Box, Container } from '@material-ui/core';
import { NavLists } from 'app/components/datadisplay/NavLists';

/* models */
import { ResultDetailModel } from './model';

export const ResultDetailLayout = (props: ResultDetailModel) => (
  <Container maxWidth="lg">
    <SimpleHeader title={props.title} description={props.description} />
    <Box height="144px" width="100%" />
    <NavLists dontShow lists={props.lists} />
  </Container>
);
