import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Typography, Grid, Box } from '@material-ui/core';
import { StatModel } from 'app/modules/landing/common/StatContainer/models';
import styled from 'styled-components';

type TypoModel = {
  signatoryType: string;
};

const CustomTypo = styled(Typography)`
  font-size: 64px !important;
  font-weight: 600 !important;
  color: ${(props: TypoModel) => {
    switch (props.signatoryType) {
      case 'gb':
        return '#ed6060';
      case 'iati':
        return '#6e5acc';
      case 'humanitarian':
        return '#5accbf';
      default:
        return 'red';
    }
  }}!important;
`;

export const Stat = (props: StatModel) => {
  return (
    <Grid direction="column" wrap="nowrap" alignItems="flex-start">
      <Box minHeight="50px">
        <Typography variant="subtitle1">{props.description}</Typography>
      </Box>

      <CustomTypo variant="h4" signatoryType={props.signatoryType}>
        {props.value}
      </CustomTypo>
    </Grid>
  );
};
