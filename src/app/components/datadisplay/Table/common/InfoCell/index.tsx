import React from 'react';
import styled from 'styled-components';

import { InfoCellModuleModel } from 'app/components/datadisplay/Table/model';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoCellModule = (props: InfoCellModuleModel) => {
  return (
    <Container>
      <span>{props.value}</span>
      {props.info && <Tooltip tip={props.info} />}
    </Container>
  );
};

export default InfoCellModule;
