import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import Colours from 'app/theme/color';

type Props = {
  size?: string;
  label?: string;
  tip?: string;
};

const BaseButton = styled(props => <Button {...props} />)`
  && {
    background-color: ${Colours.greydark20OrFontsecondary};
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-width: initial;
    min-height: initial;
    box-shadow: initial;
    & [class*='MuiButton-label'] {
      font-size: 9px;
      text-transform: initial;
      line-height: 1;
    }
    &:hover {
      background-color: ${Colours.greydark20OrFontsecondary};
    }
  }
`;

/* span is here for a reason https://github.com/atomiks/tippy.js-react */
export const TooltipButton = (props: Props) => {
  return (
    <Tooltip
      title={props.tip ? props.tip : 'empty tooltip'}
      placement="top-end"
    >
      <span>
        <BaseButton
          {...props}
          size={props.size}
          variant="contained"
          color="primary"
        >
          i
        </BaseButton>
      </span>
    </Tooltip>
  );
};
