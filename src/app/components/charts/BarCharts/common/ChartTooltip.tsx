import React, { ReactText } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

//TODO: add toolitp pointer on bottom of component

const ContentContainer = styled.div`
  padding: 16px 4px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  &:first-child {
    margin-bottom: 16px;
  }
`;

const Symbol = styled(props => <div {...props} />)`
  width: 12px;
  height: 12px;
  background: ${props => props.color};
  margin-right: 12px;
`;

const Label = styled(props => <Typography {...props} />)`
  && {
    margin-right: 28px;
  }
`;

const Value = styled(props => <Typography {...props} />)`
  && {
    margin-left: auto;
  }
`;

type ChartTooltipItemModel = {
  label: string | ReactText;
  value: number | string | ReactText;
  color: string | ReactText;
};

type ChartTooltipModel = {
  items: ChartTooltipItemModel[];
};

export const ChartTooltip = (props: ChartTooltipModel) => {
  return (
    <ContentContainer>
      {props.items.map(item => (
        <Item>
          <Symbol color={item.color} />
          <Label variant="caption">{item.label}</Label>
          <Value variant="caption">{item.value}</Value>
        </Item>
      ))}
    </ContentContainer>
  );
};
