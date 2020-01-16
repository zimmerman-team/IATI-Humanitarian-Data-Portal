import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { DonutChart } from 'app/components/charts/DonutChart';
import { DonutChartCardModel } from 'app/components/surfaces/Cards/DonutChartCard/model';

const Card = styled(props => <MuiCard {...props} />)`
  && {
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
  }
`;

const Content = styled(props => <CardContent {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  && {
    padding: 32px !important;
  }

  @media (max-width: 960px) {
    && {
      padding: 32px 16px !important;
    }
  }
`;

const Typo = styled(props => <Typography {...props} />)`
  width: 300px;
  max-width: 300px;
`;

export const DonutChartCard = (props: DonutChartCardModel) => {
  return (
    <Card>
      <Content>
        <Typo variant="h6">{props.activity}</Typo>
        <DonutChart value={props.value} />
      </Content>
    </Card>
  );
};
