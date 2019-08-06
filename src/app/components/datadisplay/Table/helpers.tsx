/* core */
import React from 'react';

/* third-party */
import indexOf from 'lodash/indexOf';
import findIndex from 'lodash/findIndex';
import { TableCell, TableRow } from '@material-ui/core';

/* project-comps */
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import {
  TableModuleModel,
  LocalTableStateModel,
} from 'app/components/datadisplay/Table/model';

/* method for getting the correct expandable table cell component depending on the table variant */
export function getExpandableTableCell(
  type: string,
  value: string | Array<string>
): React.ReactNode {
  switch (type) {
    case 'LinkCellModule':
      return <LinkCellModule value={value} link="#" />;
    default:
      return value;
  }
}

/* method for checking if total row exists, or not to add it */
export function checkAndAddTotalRow(totalData: Array<string> | undefined) {
  const totalCell = document.getElementById('total-cell');
  const tbody = document.getElementsByClassName('MuiTable-root');
  if (totalData && !totalCell && tbody.length > 0) {
    const tr = document.createElement('tr');
    tr.id = 'total-cell';
    tr.className = 'MuiTableRow-root';
    totalData.forEach(item => {
      const td = document.createElement('td');
      td.className = 'MuiTableCell-root MuiTableCell-body TotalCell';
      td.innerText = item;
      tr.appendChild(td);
    });
    tbody[0].appendChild(tr);
  }
}

/* method for getting table header cell with an info icon hover tooltip */
export function getInfoTHead(value: string, infoText: string): React.ReactNode {
  return (
    <TableCell variant="head">
      <InfoCellModule value={value} info={infoText} />
    </TableCell>
  );
}

/* additional config */
export function addConfig(
  configProps: TableModuleModel,
  localTableState: LocalTableStateModel,
  setLocalTableState: Function
) {
  let options = configProps.options;
  if (configProps.totalCell) {
    options = {
      ...options,
      onTableChange: (action, tableState) => {
        if (
          indexOf(['changePage', 'changeRowsPerPage', 'propsUpdate'], action) >
            -1 &&
          localTableState.prevAction !== action
        ) {
          setLocalTableState({
            page: tableState.page,
            prevAction: action,
            rowsPerPage: tableState.rowsPerPage,
          });
        }
      },
      /* when column view changes we need to also change the column in the custom total row */
      onColumnViewChange: (changedColumn, action) => {
        const totalCell = document.getElementById('total-cell') as HTMLElement;
        const colIndex = findIndex(configProps.columns, {
          name: changedColumn,
        });
        if (colIndex > -1 && totalCell) {
          const totalCellNodes = totalCell.childNodes[colIndex] as HTMLElement;
          if (action === 'add') {
            totalCellNodes.style.display = 'table-cell';
          } else {
            totalCellNodes.style.display = 'none';
          }
        }
      },
    };
  }
  if (configProps.expandableData) {
    options = {
      ...options,
      renderExpandableRow: (rowData, rowMeta) => {
        const dataArr = configProps.expandableData
          ? configProps.expandableData[rowMeta.rowIndex]
          : [];
        return dataArr.map((row, i) => (
          <TableRow
            key={`${rowMeta.dataIndex}-${rowMeta.rowIndex}-${row[0].value}`}
          >
            <TableCell />
            {row.map(item => (
              <TableCell colSpan={item.colSpan}>
                {getExpandableTableCell(item.type, item.value)}
              </TableCell>
            ))}
          </TableRow>
        ));
      },
    };
  }
  return options;
}
