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
      {/*SECTION*/}
      <Grid container lg={8}>
        {/* TITLE + INTRODUCTION */}
        <BreadCrumbs
          currentLocation="CCTRIs Target"
          previousLocations={['Signatory Progress']}
        />
        <Box height="32px" width="100%" />
        <Typography variant="h3">{parse(props.title)}</Typography>
        <Box height="28px" width="100%" />
        <Typography variant="h5">
          {parse(props.sections[0].content[0])}
        </Typography>
        <Box height="44px" width="100%" />

        {/* CONTENT */}
        <BodyText>
          {parse(props.sections[1].content[0])}
          {parse(props.sections[1].content[1])}
          {parse(props.sections[1].content[2])}
          {parse(props.sections[1].content[3])}
          {parse(props.sections[1].content[4])}
          {parse(props.sections[1].content[5])}
          {parse(props.sections[1].content[6])}
          {parse(props.sections[1].content[7])}
          {parse(props.sections[1].content[8])}
          {parse(props.sections[1].content[9])}
          {parse(props.sections[1].content[10])}
          {parse(props.sections[1].content[11])}
          {parse(props.sections[1].content[12])}
          {parse(props.sections[1].content[13])}
        </BodyText>
      </Grid>
    </Container>
  );
};
