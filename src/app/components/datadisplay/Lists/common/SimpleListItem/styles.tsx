import React from 'react';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import color from 'app/theme/color';
import { Typography } from 'app/theme';

export const SimpleListCell = styled(props => <TableCell {...props} />)`
  && {
    padding-left: ${props => (props.firstItem ? '0' : '24px')};
  }
`;

export const HeadingCell = styled.div`
   {
    font-family: ${Typography.fontFamily};
    font-size: 12px;
    line-height: ${Typography.caption.lineHeight};
    letter-spacing: 0.42px;
    color: ${color.midnight60};
  }
`;
