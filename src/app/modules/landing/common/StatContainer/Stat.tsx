import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { Typography, Grid, Box } from '@material-ui/core';
import { StatModel } from 'app/modules/landing/common/StatContainer/models';
import styled from 'styled-components';

const CustomTypo = styled(Typography)`
  color: ${props => {
    console.log(props);
    return props.color;
  }}!important;
`;

export const Stat = (props: StatModel) => {
  return (
    <Grid direction="column" wrap="nowrap" alignItems="flex-start">
      <Box minHeight="50px">
        <Typography variant="subtitle1">{props.description}</Typography>
      </Box>

      <CustomTypo variant="h3" color={props.color}>
        {props.value}
      </CustomTypo>
    </Grid>
  );
};
