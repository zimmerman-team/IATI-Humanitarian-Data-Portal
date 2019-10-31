import React from 'react';
import MUIDataTable from 'mui-datatables';

import { TableLayoutModel } from 'app/components/datadisplay/Table/model';
import { changeTableRowColor } from 'app/components/datadisplay/Table/helpers';

const TableLayout = (props: TableLayoutModel) => {
  React.useEffect(() => {
    props.changeTableRowColor && changeTableRowColor(props.changeTableRowColor);
  }, [props.changeTableRowColor]);

  return (
    <MUIDataTable
      data={props.data}
      title={props.title}
      options={props.options}
      columns={props.columns}
      /* todo: figure out a cleaner way to do this*/
      css={`
        .TotalCell {
          &:first-child {
            &::before {
              content: '** %s and totals relate to publishing organisations';
            }
          }
        }
      `}
    />
  );
};

export default TableLayout;
