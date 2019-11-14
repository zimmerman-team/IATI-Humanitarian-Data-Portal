/* core */
import React, { ReactNode } from 'react';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import useTitle from 'react-use/lib/useTitle';

export type PageProps = {
  title?: string;
  children?: ReactNode;
  footer?: boolean;
};

//TODO: refactor to not use styled-flexboxgrid
export const Page = (props: PageProps) => {
  useTitle(`IATI Humanitarian Data Portal - ${props.title}`);

  return (
    <Container
      maxWidth="lg"
      style={{ paddingBottom: props.footer ? '120px' : '0' }}
    >
      <Grid container>
        <Grid item lg={7} md={9}>
          <Typography variant="h3" color="textPrimary">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
      <Box height="50px" width="100%" />
      {props.children}
    </Container>
  );
};
