import React from 'react';
import styled from 'styled-components';
import MUIDataTable from 'mui-datatables';

export const TotTableContainer = styled.div`
  width: 100%;
  tfoot > tr > td {
    padding-top: 100px;
  }
`;

interface TotTableModel {
  infoData: boolean;
}

export const TotTable = styled(props => <MUIDataTable {...props} />)`
  && {
    tfoot {
      tr {
        td {
          padding: ${props => (props.infoData ? '56px 0 0 0' : '0')};
          > div {
            padding: 0 24px;
            overflow-x: scroll;
          }
        }
      }
    }
  }
`;
