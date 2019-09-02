import orderBy from 'lodash/orderBy';
import { formatMoney } from 'app/components/datadisplay/Table/helpers';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export const providersTypesCallValues = {
  orgTypes: { type: 'terms', field: 'transaction_provider_org_type' },
};

export const providersTableCallValues = pubRef => {
  return {
    q: `reporting_org_ref:${pubRef} AND transaction_humanitarian:1`,
    stats: 'true',
    'facet.pivot':
      '{!stats=piv1}transaction_provider_org_narrative,transaction_provider_org_ref,transaction_provider_org_type,iati_identifier,transaction_value_currency',
    rows: 0,
    facet: 'on',
    'facet.missing': 'true',
    'stats.field': '{!tag=piv1 sum=true}transaction_value',
  };
};

export const baseProviderConfig: TableModuleModel = {
  title: 'Providers',
  data: [],
  columns: [
    {
      name: 'Organisation / type / activity',
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
      options: { filter: false },
    },
    {
      name: 'Start date',
      options: { filter: false },
    },
    {
      name: 'Amount',
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
    expandableRows: true,
    selectableRows: 'none',
    expandableRowsOnClick: true,
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
  expandableData: [],
};
