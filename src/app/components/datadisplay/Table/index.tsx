/* core */
import React from 'react';

/* project-comps */
import TableLayout from 'app/components/datadisplay/Table/layout';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import {
  checkAndAddTotalRow,
  addConfig,
} from 'app/components/datadisplay/Table/helpers';

const TableModule = (props: TableModuleModel) => {
  React.useEffect(() => checkAndAddTotalRow(props.totalCellData));
  const [localTableState, setLocalTableState] = React.useState({
    page: 1,
    prevAction: '',
    rowsPerPage: 10,
  });
  const options = addConfig(props, localTableState, setLocalTableState);
  return <TableLayout {...props} options={options} />;
};

export default TableModule;
