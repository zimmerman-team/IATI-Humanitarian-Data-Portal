import React from 'react';

/* styles */
import { TotTable, TotTableContainer } from './style';

/* models */
import { TableWTotalModel } from './model';

/* components */
import { TableInfo } from './common/TableInfo';

// this component will let you add custom text
// in a dark background
// between the table and the pagination
// Mainly used to show total values for
// activity detail incoming/outgoing transactions tables
export const TableWTotal = (props: TableWTotalModel) => {
  return (
    <TotTableContainer>
      <TotTable
        infoData={props.infoItems && props.infoItems.length > 0}
        data={props.data}
        options={props.options}
        title={props.title}
        columns={props.columns}
      />
      {props.infoItems && props.infoItems.length > 0 && (
        <TableInfo infoItems={props.infoItems} />
      )}
    </TotTableContainer>
  );
};
