import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Base = styled.div`
  width: 350px;
  background: #fff;
  padding: 30px 20px;
  box-shadow: 0 6px 15px -4px rgba(130, 136, 148, 0.24),
    0 0 2px 1px rgba(130, 136, 148, 0.08);
`;

const Header = styled(props => <Typography {...props} />)`
  && {
    margin-bottom: 20px;
  }
`;

const Row = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ColorBox = styled.div`
  width: 16px;
  height: 8px;
  margin-right: 10px;
  background: ${props => props.color};
`;

const Label = styled(props => <Typography {...props} />)``;

export function Tooltip(props) {
  return (
    <Base>
      <Header variant="h6">{get(props, 'slice.points[0].data.x', '')}</Header>
      {props.slice.points.map(point => (
        <Row key={point.index}>
          <ColorBox color={point.color} />
          <Row>
            <Label variant="caption">{point.serieId}</Label>
            <Label variant="caption">{point.data.y} %</Label>
          </Row>
        </Row>
      ))}
    </Base>
  );
}
