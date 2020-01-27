import React from 'react';
import styled from 'styled-components';
import MUIDataTable from 'mui-datatables';
import color from 'app/theme/color';

export const TotTableContainer = styled.div`
  width: 100%;
  tfoot > tr > td {
    padding-top: 100px;
  }
`;

interface TotTableModel {
  infoData: boolean;
}

export const TotTable = styled(props => (
  <MUIDataTable {...props} options={{ responsive: 'scroll' }} />
))`
  && {
    tfoot {
      tr {
        background-color: transparent;
        td {
          background-color: transparent;
          padding: ${props => (props.infoData ? '56px 0 0 0' : '0')};
          div {
            background-color: ${color.whiteOrFontlightbase};
            padding: 0 24px;
            overflow-x: scroll;
          }
        }
      }
    }
  }
`;
