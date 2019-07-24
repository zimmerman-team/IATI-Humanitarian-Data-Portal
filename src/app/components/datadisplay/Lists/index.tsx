import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from './common/ListItem'
import {ListModel} from './mock';
import Paper from '@material-ui/core/Paper';

//TODO:
// - Optional Title
// - Optional Table Headers
// - Optional Subtitle
// - Optional Tooltip

const Base = styled(props => <Paper {...props} />)`
  padding: 18px 28px 32px 28px;
`;

const TableHeader = styled(props => <TableCell {...props} />)`
  //H6 variant of Typography
  &&{
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  padding-left: 0px; 
  }
`;

const List = (props: ListModel) => {
  const listItems = props.items.map((item) =>
  <ListItem label={item.label} values={item.values}/>
  );

// https://dev.to/claireparkerjones/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6
function formTableHeaders2() {
  const tableHeaders = new Set();
  props.items.map(item => Object.keys(item.values[0]).map( (header) => tableHeaders.add(header) ));
  //Return as array
  return Array.from(tableHeaders);
}

console.log(formTableHeaders2());
  return (
    <Base>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>{props.title}</TableHeader>
            {formTableHeaders2().map((header) =><TableCell align="right">{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems}
        </TableBody>
      </Table>
    </Base>
  );
};

export default List;
