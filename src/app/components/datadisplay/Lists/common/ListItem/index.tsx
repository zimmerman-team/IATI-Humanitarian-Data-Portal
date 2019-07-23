import React from 'react';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from 'app/components/datadisplay/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Palette } from 'app/theme';

const ToolTip = styled(props => <Tooltip {...props} />)`
  margin-top: 4px !important;
`;

const Typo = styled(props => <Typography {...props} />)`
  display: inline-block;
  float: left;
  margin-right: 14px !important;
`;

type ListItemModel = {
  coloured?: boolean;
  children?: any;
  label: string;
  tooltip?: string;
  values: ListItemValueModel[];
};

type ListItemValueModel = {
  qtc?: number;
  ptc?: number;
  date?: Date;
  version?: string
}

const ListItem = (props: ListItemModel) => {

  const values = props.values.map((value) =>
    <TableCell align="right" style={{
      color: props.coloured ? Palette.primary.main : 'none'
    }}>{value}</TableCell>
  );

  return (
          <TableRow>
            {props.children}
            <TableCell component="th" scope="row">
              <Typo variant="body2">{props.label}</Typo>
              {props.tooltip ? <ToolTip tip={props.tooltip}/> : null}
            </TableCell>
            {values}
          </TableRow>
  );
}

export default ListItem;
