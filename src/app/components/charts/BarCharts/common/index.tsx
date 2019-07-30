import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  &:first-child{
    margin-bottom: 16px;
  }
`;

const Symbol = styled(props => <div {...props} />)`
  width: 12px;
  height: 12px;
  background: ${props => props.color};
  margin-right: 12px;
`;

const Label = styled(props => <Typography {...props} />)`&&{
  margin-right: 32px;
}`;

const Value = styled(props => <Typography {...props} />)`
`;


type Model = {
  label: string,
  value: number
  color: string,
}

type Props ={
  items: Model[];
};

export const ChartTooltip = (props: Props) => {
  return (
    <ContentContainer>
      {props.items.map( item =>
        <Item>
          <Symbol color={item.color}/>
          <Label variant="caption">{item.label}</Label>
          <Value variant="caption">{item.value}</Value>
        </Item>
      )}
    </ContentContainer>
  );
};

