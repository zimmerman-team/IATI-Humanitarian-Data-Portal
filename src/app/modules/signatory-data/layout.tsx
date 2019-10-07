/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';
import { SignatoryDataModel } from './model';
import TableModule from 'app/components/datadisplay/Table';
import { PageLoader } from 'app/modules/common/PageLoader';
import { DecoSigDataTopLeft } from 'app/modules/signatory-data/common/decoration/DecoSigDataTopLeft';
import ReactDOM from 'react-dom';
import { useMount } from 'react-use';
const Element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);

export const SignatoryDataLayout = (props: SignatoryDataModel) => {
  // const p01 = document.getElementById('total-cell');

  // @ts-ignore
  // let first = p01 && p01.firstChild;

  /*let text = document.createTextNode(
    '** %s and totals relate to publishing organisations'
  );

  if (first) {
    // first.appendChild(text);
    first.innerHTML =
      '<span>** %s and totals relate to publishing organisations</span>';
    // console.log(first.textContent);
    console.log(first);
  }*/

  // @ts-ignore

  /*const Demo = () => {
    useMount(() => console.log('MOUNTED'));
    ReactDOM.render(
      <div>dshsjsdjhdshjdsjhsd</div>,
      document.getElementById('total-cell')
    );
    return null;
  };

  Demo();*/

  return (
    <Container maxWidth="lg">
      {/* ------------------------------------------------------------------ */}
      {/* decoration: top left */}
      <Hidden mdDown>
        <Box position="absolute" top="0" left="0" zIndex="10000">
          <DecoSigDataTopLeft />
        </Box>
      </Hidden>
      {/* ------------------------------------------------------------------ */}
      {props.loading && <PageLoader />}
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
          <TableModule {...props.sigTable} />
        </Grid>
      </Grid>
      <Box height="20px" />
      <Typography variant="caption">* NA stands for Not Applicable</Typography>

      <Box height="50px" />
    </Container>
  );
};
