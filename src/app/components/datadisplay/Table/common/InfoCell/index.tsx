import React from 'react';
import styled from 'styled-components';

import { InfoCellModuleModel } from 'app/components/datadisplay/Table/model';
import { TooltipButton } from 'app/components/datadisplay/Tooltip';

const Container = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    line-height: 0;
  }
`;

const InfoCellModule = (props: InfoCellModuleModel) => {
  return (
    <Container>
      {props.value}
      {props.info && <TooltipButton tip={props.info} display="inline-block" />}
    </Container>
  );
};

export default InfoCellModule;
