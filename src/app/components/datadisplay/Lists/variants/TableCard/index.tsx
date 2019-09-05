import React from 'react';

/* components */
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { TableHeader } from '../../index';
import { SimpleListItem } from '../../common/SimpleListItem';

/* models */
import { TableCardModel } from './model';

/* styles */
import { CardContainer, CardTitle } from './style';

export const TableCard = (props: TableCardModel) => {
  return (
    <CardContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              <CardTitle variant="h6">{props.title}</CardTitle>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item, index) => (
            <SimpleListItem
              key={`simple-row-${index}`}
              items={item}
              index={index}
            />
          ))}
        </TableBody>
      </Table>
    </CardContainer>
  );
};
