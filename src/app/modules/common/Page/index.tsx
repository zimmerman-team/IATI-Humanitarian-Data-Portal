/* core */
import React, { ReactNode } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Typography, Container } from '@material-ui/core';
import useTitle from 'react-use/lib/useTitle';
import { ThemeProvider } from 'styled-components';

export type PageProps = {
  title?: string;
  children?: ReactNode;
};

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

//TODO: refactor to not use styled-flexboxgrid
export const Page = (props: PageProps) => {
  useTitle(`MLT - ${props.title}`);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid>
          <Row>
            <Col lg={7} md={9}>
              <Typography variant="h3" color="textPrimary">
                {props.title}
              </Typography>
            </Col>
          </Row>
        </Grid>
        {props.children}
      </Container>
    </ThemeProvider>
  );
};
