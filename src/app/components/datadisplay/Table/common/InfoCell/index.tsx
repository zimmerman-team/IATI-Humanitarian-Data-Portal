import React from 'react';
import styled from 'styled-components';

import { InfoCellModuleModel } from 'app/components/datadisplay/Table/model';
import { TooltipButton } from 'app/components/datadisplay/Tooltip';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Tooltip = styled(TooltipButton)`
  margin-left: 8px !important;
`;

const InfoCellModule = (props: InfoCellModuleModel) => {
  return (
    <Container>
      <div>
        {props.value}
        {props.info && <Tooltip tip={props.info} display="inline-block" />}
      </div>
    </Container>
  );
};

export default InfoCellModule;
