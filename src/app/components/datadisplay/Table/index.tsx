/* core */
import React from 'react';

/* third-party */
import indexOf from 'lodash/indexOf';
import findIndex from 'lodash/findIndex';
import { TableCell, TableRow } from '@material-ui/core';

/* project-comps */
import TableLayout from 'app/components/datadisplay/Table/layout';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import InfoCellModule from 'app/components/datadisplay/Table/common/InfoCell';
import LinkCellModule from 'app/components/datadisplay/Table/common/LinkCell';

/* method for getting the correct expandable table cell component depending on the table variant */
function getExpandableTableCell(
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
  return (
    <TableCell variant="head">
      <InfoCellModule value={value} info={infoText} />
    </TableCell>
  );
}

const TableModule = (props: TableModuleModel) => {
  React.useEffect(() => checkAndAddTotalRow(props.totalCellData));
  const [localTableState, setLocalTableState] = React.useState({
    page: 1,
    prevAction: '',
    rowsPerPage: 10,
  });
  let options = props.options;
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
      /* when column view changes we need to also change the column in the custom total row */
      onColumnViewChange: (changedColumn, action) => {
        const totalCell = document.getElementById('total-cell') as HTMLElement;
        const colIndex = findIndex(props.columns, { name: changedColumn });
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
  if (props.expandableData) {
    options = {
      ...options,
      renderExpandableRow: (rowData, rowMeta) => {
        const dataArr = props.expandableData
          ? props.expandableData[rowMeta.rowIndex]
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
  return <TableLayout {...props} options={options} />;
};

export default TableModule;
