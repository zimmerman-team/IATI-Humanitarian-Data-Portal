import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LegendItem = styled(props => <Typography {...props} />)`
  && {
    color: #777;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    max-width: calc(100% * (1 / ${props => props.count}) - 10px);
  }
`;

const ColoredBox = styled.div`
  height: 8px;
  min-width: 16px;
  margin-right: 5px;
  background-color: ${props => props.color};
`;

export const Legend = props => {
  const legends = props.items.map((item, index) => (
    <LegendItem variant="caption" count={props.items.length}>
      <ColoredBox color={props.colors[index]} />
      {item.id}
    </LegendItem>
  ));
  return <Container>{legends.reverse()}</Container>;
};
