import React from 'react';
import { SvgIcon, Tooltip } from '@material-ui/core';
import { ToolTipIcon } from 'app/components/svgs/ToolTipIcon';

type Props = {
  size?: string;
  label?: string;
  tip?: string;
  display?: string;
};

/* span is here for a reason https://github.com/atomiks/tippy.js-react */
export const TooltipButton = (props: Props) => {
  return (
    <Tooltip
      title={
        <span style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
          {props.tip ? props.tip : 'empty tooltip'}
        </span>
      }
    >
      <span>
        <SvgIcon component={ToolTipIcon} />
      </span>
    </Tooltip>
  );
};
