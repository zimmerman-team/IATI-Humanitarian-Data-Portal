import React from 'react';

/* components */
import { TableRow } from '@material-ui/core';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';

/* models */
import { SimpleListItemModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';

/* styles */
import {
  HeadingCell,
  SimpleListCell,
} from 'app/components/datadisplay/Lists/common/SimpleListItem/styles';

// TODO: aqdjust this guy to look properly

export const SimpleListItem = (props: SimpleListItemModel) => {
  return (
    <TableRow>
      {props.items.map((item, index) => (
        <SimpleListCell
          key={`card-cell-${props.index}-${index}`}
          firstItem={index === 0}
          align={index === props.items.length - 1 ? 'right' : 'left'}
        >
          {item.link ? (
            <LinkCellModule
              link={item.link}
              value={item.value}
              extLink={item.extLink}
            />
          ) : item.heading ? (
            <HeadingCell>{item.value}</HeadingCell>
          ) : (
            item.value
          )}
        </SimpleListCell>
      ))}
    </TableRow>
  );
};
