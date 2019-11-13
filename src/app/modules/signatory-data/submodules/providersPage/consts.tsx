import React from 'react';
import orderBy from 'lodash/orderBy';
import styled from 'styled-components';
import { formatMoney } from 'app/components/datadisplay/Table/helpers';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { ExpandedRow as CustomRow } from 'app/components/datadisplay/Table/common/ExpandedRow';

const NumberLink = styled.a`
  color: #000;
  text-decoration: underline;

  &:hover {
    color: #5accbf;
  }
`;

export const providersTableCallValues = pubRef => {
  return {
    q: `reporting_org_ref:${pubRef} AND transaction_type:(13 11 1) AND 
        (humanitarian:1 OR transaction_humanitarian:1 OR 
      (-(-sector_vocabulary:1 OR sector_vocabulary:*) AND 
      (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018])) OR 
      (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*) AND 
      (transaction_sector_code:[70000 TO 79999] OR
       transaction_sector_code:[93010 TO 93018])))`,
    stats: 'true',
    'facet.pivot':
      '{!stats=piv1}transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_type,transaction_value_currency',
    rows: 0,
    'facet.limit': -1,
    facet: 'on',
    'facet.missing': 'true',
    'stats.field': '{!tag=piv1 sum=true}transaction_value',
  };
};

export const allProvidersQuery = (pubRef: string, field: string) => {
  return {
    q: `reporting_org_ref:${pubRef}`,
    'facet.limit': -1,
    'facet.pivot': field,
    'facet.missing': 'true',
    rows: 0,
    facet: 'on',
  };
};

export const baseProviderConfig = (
  funder: boolean,
  activityListFilterAction?
): TableModuleModel => {
  return {
    title: 'Funding organisations',
    data: [],
    columns: [
      {
        name: 'Organisation',
        options: { filter: false },
      },
      {
        name: 'IATI reference',
        options: { filter: false },
      },
      {
        name: 'Organisation type',
        options: { filter: false },
      },
      {
        name: 'Activites',
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let label = 'Recipient';
            let filterName = 'transaction_receiver_org_ref';

            if (funder) {
              label = 'Funder';
              filterName = 'transaction_provider_org_ref';
            }

            const filter = {
              label: `${label}: ${tableMeta.rowData[0]}`,
              value: `(${filterName}:${tableMeta.rowData[1]})`,
            };
            return activityListFilterAction &&
              tableMeta.rowData[1] !== 'Not Provided' ? (
              <NumberLink
                onClick={e => {
                  e.stopPropagation();
                  activityListFilterAction(filter);
                }}
              >
                {value}
              </NumberLink>
            ) : (
              value
            );
          },
        },
      },
      {
        name: 'Total amount',
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            if (value && value > 0) {
              return formatMoney(value);
            }
            if (value.num && value.num > 0) {
              return formatMoney(value.num, value.currency);
            }
            return 'No data';
          },
        },
      },
    ],
    options: {
      print: true,
      search: true,
      filter: false,
      download: true,
      rowHover: true,
      pagination: true,
      viewColumns: true,
      responsive: 'scroll',
      selectableRows: 'none',
      customSort: (data: any[], colIndex: number, order: string) => {
        if (colIndex === 5) {
          return orderBy(
            data,
            item => {
              return item.data[5].num;
            },
            order === 'desc' ? 'desc' : 'asc'
          );
        }
        return orderBy(
          data,
          item => {
            return item.data[colIndex];
          },
          order === 'desc' ? 'desc' : 'asc'
        );
      },
    },
    columnsCell: ['', '', '', '', '', ''],
    totalCell: false,
  };
};
