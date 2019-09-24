import React from 'react';
import { CoverageModel } from './model';
import TableModule from 'app/components/datadisplay/Table';
import { DecoSigOverviewTopLeft } from 'app/modules/signatory-data/submodules/overview/common/decoration/DecoSigOverviewTopLeft';
import Box from '@material-ui/core/Box';

export const CoverageLayout = (props: CoverageModel) => {
  return (
    <>
      {/* ---------------------------------------- */}
      {/* decoration: top left */}
      <Box position="absolute" top="0" left="0" zIndex="10000">
        <DecoSigOverviewTopLeft />
      </Box>
      {/* ---------- */}

      {/* ---------------------------------------- */}
      {/* Coverage data */}
      <TableModule
        title={props.tableData.title}
        columns={props.tableData.columns}
        columnsCell={props.tableData.columnsCell}
        data={props.tableData.data}
        options={props.tableData.options}
      />
      {/* ---------- */}
    </>
  );
};
