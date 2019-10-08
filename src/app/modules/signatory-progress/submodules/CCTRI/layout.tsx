import React from 'react';
import styled from 'styled-components';
import { CCTRIPageModel } from './model';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import parse from 'html-react-parser';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';

//TODO: Implement background with artworks

const BodyText = styled(props => <Typography variant="body1" {...props} />)`
  && {
    > p {
      margin-bottom: 28px;
    }
  }
`;

export const CCTRILayout = (props: CCTRIPageModel) => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={8} md={12}>
          {/* TITLE + INTRODUCTION */}
          <Box height="20px" width="100%" />
          <BreadCrumbs
            currentLocation="CCTRIs Target"
            previousLocations={[
              { url: '/signatory-progress', label: 'Signatory Progress' },
            ]}
          />
          <Box height="32px" width="100%" />
          <Typography variant="h3">{parse(props.title)}</Typography>
          <Box height="28px" width="100%" />
          <Typography variant="h5">
            {parse(props.sections[0].content)}
          </Typography>
          <Box height="44px" width="100%" />

          {/* CONTENT */}
          <BodyText>{parse(props.sections[1].content)}</BodyText>
        </Grid>
      </Grid>
    </Container>
  );
};
