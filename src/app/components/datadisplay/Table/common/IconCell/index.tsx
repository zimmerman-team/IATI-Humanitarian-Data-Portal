import React from 'react';
import styled from 'styled-components';

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { IconCellModuleModel } from 'app/components/datadisplay/Table/model';

const CustomIcon = styled(props => <SvgIcon {...props} />)``;

function CheckIcon(props: SvgIconProps) {
  return (
    <CustomIcon {...props}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </CustomIcon>
  );
}

function CrossIcon(props: SvgIconProps) {
  return (
    <CustomIcon {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </CustomIcon>
  );
}

function NotAvailableIcon(props: SvgIconProps) {
  return (
    <CustomIcon {...props}>
      <g fill="none" fillRule="nonzero">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#222"
          d="M10 8v9H8.627l-4.013-6.13h-.07V17H3V8h1.38l4.01 6.135h.075V8H10zm2 9a.997.997 0 0 1-1-1.005.995.995 0 0 1 1-.995c.536 0 .995.447 1 .995A1.014 1.014 0 0 1 12 17zm3.666 0H14l3.034-9h1.928L22 17h-1.666l-.716-2.22h-3.24L15.666 17zM17 14h2l-.972-4h-.056L17 14z"
        />
      </g>
    </CustomIcon>
  );
}

function getIcon(value: string | string[]) {
  switch (value) {
    case 'true':
      return <CheckIcon />;
    case 'false':
      return <CrossIcon />;
    default:
      return <NotAvailableIcon />;
  }
}

const IconCellModule = (props: IconCellModuleModel) => {
  return getIcon(props.value);
};

export default IconCellModule;
