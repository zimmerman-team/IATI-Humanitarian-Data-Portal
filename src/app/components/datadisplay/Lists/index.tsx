import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from './common/ListItem'
import { ListModel } from './model';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

//TODO:
// - Optional highlight
// - Overall styling

const Base = styled(props => <Paper {...props} />)`
  padding: 18px 28px 32px 28px;
`;

const TableHeader = styled(props => <TableCell {...props} />)`
  &&{
  padding-left: 0px; 
  //padding-bottom: 9px;
  }
`;

const TableValueHeader = styled(props => <TableCell {...props} />)`
  &&{
  text-transform: capitalize;
  }
`;

const TableTitle = styled(props => <Typography {...props} />)`
  &&{
  color: black;
  }
`;

const TableSubtitle = styled(props => <Typography {...props} />)`
`;

const List = (props: ListModel) => {
  const listItems = props.items.map((item) =>
  <ListItem label={item.label} values={item.values} tooltip={item.tooltip}/>
  );

// https://dev.to/claireparkerjones/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6
function valueHeaders() {

  const tableHeadersSet = new Set();
  props.items.map(item => Object.keys(item.values[0]).map( (header) => tableHeadersSet.add(header)));
  // From Set to Array
  const tableHeadersArray = Array.from(tableHeadersSet);

  return tableHeadersArray.map( (header) => <TableValueHeader align="right">{header as string}</TableValueHeader>);
}

  return (
    <Base>
      <Table>
          <TableHead>
            <TableRow>
              <TableHeader>
                <TableTitle variant="h6">{props.title}</TableTitle>
                <TableSubtitle variant="caption">{props.subtitle}</TableSubtitle>
              </TableHeader>
              {props.valueHeaders && valueHeaders()}
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
