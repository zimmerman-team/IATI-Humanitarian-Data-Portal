import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import MuiTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import Typography from '@material-ui/core/Typography';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';

const ToolTip = styled(props => <Tooltip {...props} />)`
  margin-top: 4px !important;
`;

const Typo = styled(props => <Typography {...props} />)`
  display: inline-block;
  float: left;
  margin-right: 14px !important;
  text-decoration: ${props => (props.theme.link ? 'underline' : 'none')};
  ${props =>
    props.theme.link
      ? `
    &:hover {
    color: #5accbf;
    cursor: pointer;
  }`
      : ''}
`;

export const RowHeader = styled(props => <TableCell {...props} />)`
  && {
    padding-left: 0;
    background-color: ${props => (props.highlight ? 'yellow' : '')};
  }
`;

export const TableCell = styled(props => <MuiTableCell {...props} />)`
  background-color: ${props =>
    props.highlight ? 'yellow' : '#fff'} !important;
`;

const ListItem = (props: ListItemModel) => {
  const cellValues = props.values.map(value =>
    Object.values(value).map(cell => (
      <TableCell key={cell} align="right" highlight={props.highlight}>
        {cell}
      </TableCell>
    ))
  );
  return (
    <TableRow>
      <RowHeader component="th" scope="row">
        <Typo
          variant="body2"
          theme={{
            link: !!props.onClick && get(props, 'values[0].qtc', 0) > 0,
          }}
          onClick={() =>
            props.onClick &&
            get(props, 'values[0].qtc', 0) > 0 &&
            props.onClick()
          }
        >
          {props.label}
        </Typo>
        {props.tooltip ? <ToolTip tip={props.tooltip} /> : null}
      </RowHeader>
      {cellValues}
    </TableRow>
  );
};

export default ListItem;
