import React from 'react';
import styled from 'styled-components';

/* components */
import { Box, Grid, Hidden, Typography } from '@material-ui/core';

/* models */
import { SimpleHeaderModel } from './model';

const ContentTypographyLG = styled(props => <Typography {...props} />)`
  column-count: 2;
  column-gap: 6rem;
`;

export const SimpleHeader = (props: SimpleHeaderModel) => (
  <Grid container>
    <Grid item lg={11}>
      <Typography variant="h4">{props.title}</Typography>
      <Box width="100%" height="25px" />
      <Hidden only="md">
        <ContentTypographyLG variant="body1">
          {props.description}
        </ContentTypographyLG>
      </Hidden>

      <Hidden only={['lg', 'xl']}>
        <Typography variant="body1">{props.description}</Typography>
      </Hidden>
    </Grid>
  </Grid>
);
