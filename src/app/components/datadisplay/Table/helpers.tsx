/* eslint-disable no-case-declarations */
/* core */
import React from 'react';

/* third-party */
import find from 'lodash/find';
import sumBy from 'lodash/sumBy';
import filter from 'lodash/filter';
import indexOf from 'lodash/indexOf';
import findIndex from 'lodash/findIndex';
import { TableCell, TableRow } from '@material-ui/core';

/* project-comps */
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import {
  TableModuleModel,
  LocalTableStateModel,
  TotalRowColModel,
} from 'app/components/datadisplay/Table/model';
import { MUIDataTableState } from 'mui-datatables';

const nf = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/* method for getting the correct expandable table cell component depending on the table variant */
export function getExpandableTableCell(
  type: string,
  value: string | string[],
): React.ReactNode {
  switch (type) {
    case 'LinkCellModule':
      return <LinkCellModule value={value} link="#" />;
    default:
      return value;
  }
}

/* method for checking if total row exists, or not to add it */
export function checkAndAddTotalRow(
  totalData: Array<string | number> | undefined,
  update?: boolean,
) {
  const totalCell = document.getElementById('total-cell') as HTMLElement;
  const tbody = document.getElementsByClassName('MuiTable-root');
  if (totalData && !totalCell && tbody.length > 0) {
    const tr = document.createElement('tr');
    tr.id = 'total-cell';
    tr.className = 'MuiTableRow-root';
    totalData.forEach(item => {
      const td = document.createElement('td');
      td.className = 'MuiTableCell-root MuiTableCell-body TotalCell';
      td.innerText = item.toString();
      tr.appendChild(td);
    });
    tbody[0].appendChild(tr);
  } else if (update && totalCell && totalData) {
    const totalCellNodes = totalCell.childNodes as NodeListOf<HTMLElement>;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < totalCellNodes.length; i++) {
      totalCellNodes[i].innerText = totalData[i].toString();
    }
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

function onTableChange(
  action: string,
  tableState: MUIDataTableState,
  localTableState: LocalTableStateModel,
  setLocalTableState: Function,
  setTotalData: Function,
  totalRowColsDef: TotalRowColModel[] | undefined,
) {
  if (
    indexOf(['changePage', 'changeRowsPerPage', 'propsUpdate'], action) > -1 &&
    localTableState.prevAction !== action
  ) {
    setLocalTableState({
      page: tableState.page,
      prevAction: action,
      rowsPerPage: tableState.rowsPerPage,
    });
  }
  if (
    indexOf(['search', 'filterChange'], action) > -1 &&
    localTableState.prevAction !== action &&
    totalRowColsDef
  ) {
    setLocalTableState({
      ...localTableState,
      prevAction: action,
    });
    setTotalData(calculateTotalRow(tableState, totalRowColsDef));
  }
}

function onColumnViewChange(
  changedColumn: string,
  action: string,
  configProps: TableModuleModel,
) {
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
}

function renderExpandableRow(
  rowMeta: { dataIndex: number; rowIndex: number },
  configProps: TableModuleModel,
) {
  const dataArr = configProps.expandableData
    ? configProps.expandableData[rowMeta.rowIndex]
    : [];
  return dataArr.map((row, i) => (
    <TableRow key={`${rowMeta.dataIndex}-${rowMeta.rowIndex}-${row[0].value}`}>
      <TableCell />
      {row.map(item => (
        <TableCell colSpan={item.colSpan}>
          {getExpandableTableCell(item.type, item.value)}
        </TableCell>
      ))}
    </TableRow>
  ));
}

export function calculateTotalRow(tableState, totalRowColsDef) {
  const data = tableState.displayData
    ? filter(tableState.data, d => {
        return find(tableState.displayData, { dataIndex: d.index });
      })
    : tableState.data;
  const totalRowData = totalRowColsDef.map((cd, index) => {
    switch (cd.dataType) {
      case 'money':
        const validData = filter(data, item => {
          return typeof item.data[index] === 'number';
        });
        return formatMoney(sumBy(validData, `data[${index}]`));
      case 'percentage':
        const count = filter(data, item => {
          return item.data[index] === cd.percValue;
        }).length;
        const percVal = (count / data.length) * 100;
        return `${count} (${percVal.toFixed(2)}%)`;
      case 'count':
        return data.length;
      default:
        return '';
    }
  });
  checkAndAddTotalRow(totalRowData, true);
  return totalRowData;
}

export function formatMoney(value: number): string {
  return nf.format(value);
}

/* additional config */
export function addConfig(
  configProps: TableModuleModel,
  localTableState: LocalTableStateModel,
  setLocalTableState: Function,
  setTotalData: Function,
) {
  let options = configProps.options;
  if (configProps.totalCell) {
    options = {
      ...options,
      onTableChange: (action, tableState) =>
        onTableChange(
          action,
          tableState,
          localTableState,
          setLocalTableState,
          setTotalData,
          configProps.totalRowColsDef,
        ),
      /* when column view changes we need to also change the column in the custom total row */
      onColumnViewChange: (changedColumn, action) =>
        onColumnViewChange(changedColumn, action, configProps),
    };
  }
  if (configProps.expandableData) {
    options = {
      ...options,
      renderExpandableRow: (rowData, rowMeta) =>
        renderExpandableRow(rowMeta, configProps),
    };
  }
  return options;
}
