import React from 'react';

/* models */
import { TableInfoModel } from './model';

/* styles */
import { InfoItemContainer, InfoItemValue, TableInfoContainer } from './style';

export const TableInfo = (props: TableInfoModel) => {
  return (
    <TableInfoContainer>
      {props.infoItems.map(item => (
        <InfoItemContainer margin={item.margin}>
          <InfoItemValue>{item.label}</InfoItemValue>
          <InfoItemValue>{item.value}</InfoItemValue>
        </InfoItemContainer>
      ))}
    </TableInfoContainer>
  );
};
