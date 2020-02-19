/* core */
import React from 'react';

/* project-comps */
import TableLayout from 'app/components/datadisplay/Table/layout';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import {
  addConfig,
  calculateTotalRow,
  VerticalScrollHelper,
} from 'app/components/datadisplay/Table/helpers';

const TableModule = (props: TableModuleModel) => {
  const [totalData, setTotalData] = React.useState({});
  const [localTableState, setLocalTableState] = React.useState({
    page: 1,
    prevAction: '',
    rowsPerPage: 10,
    displayData: props.data,
  });
  React.useEffect(() => {
    if (props.totalCell) {
      setTotalData(
        calculateTotalRow(
          {
            displayData: localTableState.displayData,
            data: props.data.map(d => ({
              data: [...d],
            })),
          },
          props.totalRowColsDef
        )
      );
    }
  }, [props.data, props.totalCell, props.totalRowColsDef]);
  const options = addConfig(
    props,
    localTableState,
    setLocalTableState,
    setTotalData
  );
  return (
    <VerticalScrollHelper>
      <TableLayout {...props} options={options} />
    </VerticalScrollHelper>
  );
};

export default TableModule;
