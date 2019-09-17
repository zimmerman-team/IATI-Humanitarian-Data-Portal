import React from 'react';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';

export const SimpleListCell = styled(props => <TableCell {...props} />)`
  && {
    padding-left: ${props => (props.firstItem ? '0' : '24px')};
  }
`;
