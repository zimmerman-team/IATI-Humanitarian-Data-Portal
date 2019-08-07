import React from 'react';
import styled from 'styled-components';

import { Paper } from '@material-ui/core';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { InfoCellModuleModel } from 'app/components/datadisplay/Table/model';
import theme from 'app/theme';

const CustomSvgIcon = styled(props => <SvgIcon {...props} />)`
  vertical-align: bottom;

  &:hover {
    opacity: 0.5;
  }
`;

const MoreTooltip = styled(Paper)`
  width: 150px;
  padding: 10px;
  margin-left: 5px;
  position: absolute;
  display: inline-block;
`;

function InfoIcon(props: SvgIconProps) {
  return (
    <CustomSvgIcon {...props}>
      <path
        fill={theme.palette.grey.A200}
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </CustomSvgIcon>
  );
}

const InfoCellModule = (props: InfoCellModuleModel) => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <>
      {props.value}{' '}
      <InfoIcon
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      />
      {showInfo && <MoreTooltip>{props.info}</MoreTooltip>}
    </>
  );
};

export default InfoCellModule;
