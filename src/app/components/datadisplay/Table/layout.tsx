import React from 'react';
import MUIDataTable from 'mui-datatables';

import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import styled from 'styled-components';
import Colors from 'app/theme/color';

const DataTable = styled(props => <MUIDataTable {...props} />)`
  && {
    .TotalCell {
      &:first-child {
        &::before {
          content: '** %s and totals relate to publishing organisations';
        }
      }
    }

    .MuiTablePagination-actions {
      margin-left: 0;
    }

    [class*='MUIDataTableHeadCell-sortAction'] {
      align-items: center;
    }

    .MuiTableSortLabel-root {
      height: 0;
    }

    .MuiTableCell-head {
      font-size: 12px;
      font-weight: normal;
      line-height: 1.33;
      letter-spacing: 0.42px;
      color: ${Colors.midnight60};
    }
  }
`;

const TableLayout = (props: TableLayoutModel) => {
  React.useEffect(() => {
    props.changeTableRowColor && changeTableRowColor(props.changeTableRowColor);
  }, [props.changeTableRowColor]);

  return (
    <DataTable
      data={props.data}
      title={props.title}
      options={props.options}
      columns={props.columns}
    />
  );
};

export default TableLayout;
