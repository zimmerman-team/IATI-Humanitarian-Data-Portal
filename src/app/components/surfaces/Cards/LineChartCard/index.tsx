import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { LineChart } from 'app/components/charts/LineChart';
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';

const Card = styled(props => <MuiCard {...props} />)`
  && {
    overflow: inherit !important;
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
  }
`;

const Content = styled(props => <CardContent {...props} />)`
  display: flex;
  flex-direction: column;
  && {
    padding: 32px !important;
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  && {
    margin-right: 100px;
    margin-bottom: 32px;
  }
`;

export const LineChartCard = (props: LineChartCardModel) => {
  return (
    <Card>
      <Content>
        <Typo variant="h6">{props.title}</Typo>
        <LineChart values={props.values.values} colors={props.colors} />
      </Content>
    </Card>
  );
};
