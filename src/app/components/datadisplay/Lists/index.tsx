import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from './common/ListItem'
import Paper from '@material-ui/core/Paper';
import listModel from './mock';

const BaseSnackbar = styled(props => <Table {...props} />)`
  & [class*=''] {
  }
`;

type ListModel = {
  title?: string;
  subtitle?: string;
  header?: boolean;
  items: ListItemModel[];
}

type ListItemModel = {
  label: string;
  values: ListItemValueModel[];
}

type ListItemValueModel = {
  qtc?: number;
  ptc?: number;
  date?: Date;
  version?: string
}

const List = (props: ListModel) => {
  const listItems = props.items.map((item) =>
    <ListItem label={item.label} values={item.values}/>
  );

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*<ListItem label="Hond" values={[1,2]} coloured/>*/}
          {/*<ListItem label="Hond" values={[1,2]} tooltip="Tooltip"/>*/}
          {listItems}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default List;
