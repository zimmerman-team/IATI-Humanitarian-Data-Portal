/* core */
import React from 'react';
import styled from 'styled-components';

/* third-party */
import remove from 'lodash/remove';
import indexOf from 'lodash/indexOf';
import findIndex from 'lodash/findIndex';
import { TableCell, TableRow } from '@material-ui/core';

/* project-comps */
import TableLayout from 'app/components/datadisplay/Table/layout';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';
import IconCellModule from 'app/components/datadisplay/Table/common/IconCell';
import MultiValuesCellModule from 'app/components/datadisplay/Table/common/MultiValuesCell';

/* method for getting the correct table cell component depending on the table variant */
function getTableCell(
  type: string,
  value: string | Array<string>,
  props?: any
): React.ReactNode {
  switch (type) {
    case 'InfoCellModule':
      return <InfoCellModule value={value} infoText={value} {...props} />;
    case 'LinkCellModule':
      return <LinkCellModule value={value} link="#" {...props} />;
    case 'IconCellModule':
      return <IconCellModule value={value} {...props} />;
    case 'MultiValuesCellModule':
      return <MultiValuesCellModule value={value} {...props} />;
    default:
      return <TableCell {...props}>{value}</TableCell>;
  }
}

/* method for checking if total row exists, or not to add it */
function checkAndAddTotalRow(totalData: Array<string> | undefined) {
  if (totalData) {
    const totalCell = document.getElementById('total-cell');
    if (!totalCell) {
      const tbody = document.getElementsByClassName('MuiTable-root');
      if (tbody.length > 0) {
        const tr = document.createElement('tr');
        tr.id = 'total-cell';
        tr.className = 'MuiTableRow-root';
        if (totalData) {
          totalData.forEach(item => {
            const td = document.createElement('td');
            td.className = 'MuiTableCell-root MuiTableCell-body TotalCell';
            td.innerText = item;
            tr.appendChild(td);
          });
        }
        tbody[0].appendChild(tr);
      }
    }
  }
}

/* method for getting table header cell with an info icon hover tooltip */
export function getInfoTHead(value: string, infoText: string): React.ReactNode {
  return <InfoCellModule value={value} infoText={infoText} />;
}

const TableModule = (props: TableModuleModel) => {
  React.useEffect(() => checkAndAddTotalRow(props.totalCellData), []);
  const [localTableState, setLocalTableState] = React.useState({
    page: 1,
    prevAction: '',
    rowsPerPage: 10,
  });
  let options = props.options;
  if (props.customRows) {
    options = {
      ...options,
      customRowRender: (data, dataIndex, rowIndex) => {
        const tds: any[] = [];
        data.forEach((el, index) => {
          if (props.columnsCell.length > index) {
            const cell: React.ReactNode = getTableCell(
              props.columnsCell[index],
              el
            );
            tds.push(cell);
          } else {
            tds.push(<TableCell>{el}</TableCell>);
          }
        });
        return <TableRow key={rowIndex}>{tds}</TableRow>;
      },
    };
  }
  if (props.totalCell) {
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
    };
  }
  if (props.expandableData) {
    options = {
      ...options,
      renderExpandableRow: (rowData, rowMeta) => {
        const dataArr = props.expandableData
          ? props.expandableData[rowMeta.rowIndex]
          : [];
        return dataArr.map(row => (
          <TableRow key={rowMeta.dataIndex}>
            <TableCell />
            {row.map(item =>
              getTableCell(item.type, item.value, { colSpan: item.colSpan })
            )}
          </TableRow>
        ));
      },
    };
  }
  return <TableLayout {...props} options={options} />;
};

export default TableModule;
