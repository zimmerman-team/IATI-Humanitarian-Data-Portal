import React from 'react';

/* interfaces */
import { ExpendedRowModel } from './model';

/* styles */
import { CellItem, LinkContainer, RowContainer } from './style';

/* components */
import LinkCellModule from '../LinkCell';

export const ExpandedRow = (props: ExpendedRowModel) => {
  return (
    <RowContainer
      hover={props.hover}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.data.map((cell, index) => {
        if (cell.type === 'LinkCellModule') {
          return (
            <td
              key={`exp-cell-${index}-${props.rowIndex}`}
              colSpan={cell.colSpan}
            >
              <LinkContainer>
                <LinkCellModule
                  value={cell.value}
                  link={cell.link ? cell.link : '#'}
                />
              </LinkContainer>
            </td>
          );
        }
        return (
          <td
            key={`exp-cell-${index}-${props.rowIndex}`}
            colSpan={cell.colSpan}
          >
            <CellItem>{cell.value}</CellItem>
          </td>
        );
      })}
    </RowContainer>
  );
};
