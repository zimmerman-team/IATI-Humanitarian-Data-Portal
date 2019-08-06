import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { TableCell } from '@material-ui/core';
import { LinkCellModuleModel } from 'app/components/datadisplay/Table/model';
import theme from 'app/theme';

const CustomLink = styled(props => <Link {...props} />)`
  color: ${theme.palette.primary.dark};
`;

const LinkCellModule = (props: LinkCellModuleModel) => {
  return (
    <TableCell {...props}>
      <CustomLink to={props.link}>{props.value}</CustomLink>
    </TableCell>
  );
};

export default LinkCellModule;
