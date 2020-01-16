import React from 'react';
import MUIDataTable from 'mui-datatables';

import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';
import styled from 'styled-components';

const DataTable = styled(props => <MUIDataTable {...props} />)`
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
