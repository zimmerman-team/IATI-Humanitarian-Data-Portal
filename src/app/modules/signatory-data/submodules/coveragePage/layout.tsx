import React from 'react';
import { CoverageModel } from './model';
import TableModule from 'app/components/datadisplay/Table';

export const CoverageLayout = (props: CoverageModel) => {
  return (
    <>
      <TableModule
        title={props.tableData.title}
        columns={props.tableData.columns}
        columnsCell={props.tableData.columnsCell}
        data={props.tableData.data}
        options={props.tableData.options}
      />
    </>
  );
};
