import React from 'react';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TooltipButton } from 'app/components/datadisplay/Tooltip';
import Typography from '@material-ui/core/Typography';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';

const ToolTip = styled(props => <TooltipButton {...props} />)`
  margin-top: 4px !important;
`;

const Typo = styled(props => <Typography {...props} />)`
  display: inline-block;
  float: left;
  margin-right: 14px !important;
`;

const RowHeader = styled(props => <TableCell {...props} />)`
  && {
    padding-left: 0;
  }
`;

const ListItem = (props: ListItemModel) => {
  const cellValues = props.values.map(value =>
    Object.values(value).map(cell => (
      <TableCell align="right">{cell}</TableCell>
    ))
  );

  return (
    <TableRow>
      <RowHeader component="th" scope="row">
        <Typo variant="body2">{props.label}</Typo>
        {props.tooltip ? <ToolTip tip={props.tooltip} /> : null}
      </RowHeader>
      {cellValues}
    </TableRow>
  );
};

export default ListItem;
