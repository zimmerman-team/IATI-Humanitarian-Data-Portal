import React from 'react';
import MUIDataTable from 'mui-datatables';

import { TableLayoutModel } from 'app/components/datadisplay/Table/model';

const TableLayout = (props: TableLayoutModel) => {
  return (
    <MUIDataTable
      data={props.data}
      title={props.title}
      options={props.options}
      columns={props.columns}
    />
  );
};

export default TableLayout;
