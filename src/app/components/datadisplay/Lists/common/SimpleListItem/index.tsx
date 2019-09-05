import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { SimpleListItemModel } from './model';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';

export const SimpleListItem = (props: SimpleListItemModel) => {
  return (
    <TableRow>
      {props.items.map((item, index) => (
        <TableCell key={`card-cell-${props.index}-${index}`}>
          {item.link ? (
            <LinkCellModule link={item.link} value={item.value} />
          ) : (
            item.value
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};
