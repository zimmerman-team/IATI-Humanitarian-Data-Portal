import React from 'react';

/* components */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TableHeader } from '../../index';
import { SimpleListItem } from '../../common/SimpleListItem';

/* models */
import { TableCardModel } from './model';

/* styles */
import {
  ArrowContainer,
  ArrowStyleDown,
  ArrowStyleUp,
  CardContainer,
  CardHead,
  CardTitle,
} from './style';

export const TableCard = (props: TableCardModel) => {
  const [open, setOpen] = React.useState(false);

  const isOpen = (props.expandable && open) || !props.expandable;

  const items = props.items || [];

  return (
    <CardContainer open={isOpen}>
      <Table>
        <CardHead
          border={isOpen}
          expandable={props.expandable}
          onClick={() => setOpen(!open)}
        >
          <TableHeader>
            <CardTitle variant="h6">{props.title}</CardTitle>
          </TableHeader>
          {props.expandable && (
            <TableHeader colSpan={3}>
              <ArrowContainer>
                {open ? <ArrowStyleUp /> : <ArrowStyleDown />}
              </ArrowContainer>
            </TableHeader>
          )}
        </CardHead>
        {isOpen && (
          <TableBody>
            {items.map((item, index) => (
              <SimpleListItem
                key={`simple-row-${index}`}
                items={item}
                index={index}
              />
            ))}
          </TableBody>
        )}
      </Table>
    </CardContainer>
  );
};
