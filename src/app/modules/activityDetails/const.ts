import { ActDetailQuery } from './store/interface';
import { TableModuleModel } from '../../components/datadisplay/Table/model';
import { formatMoney } from '../../components/datadisplay/Table/helpers';

export const actMetadataQuery: ActDetailQuery = {
  q: '*:*',
  fl:
    'iati_identifier,title,description,reporting_org_narrative,reporting_org_ref,activity_date_iso_date,activity_date_type',
};

export const inTransactionsQuery: ActDetailQuery = {
  q:
    'iati_identifier:{identifier_value} AND (transaction_type:1 OR transaction_type:11 OR transaction_type:13)',
  fl:
    'transaction_date_iso_date,transaction_provider_org_narrative,transaction_receiver_org_narrative,transaction_value,transaction_value_currency,transaction_type,transaction_provider_org_provider_activity_id,transaction_receiver_org_receiver_activity_id',
  rows: 1000,
};

export const outTransactionsQuery: ActDetailQuery = {
  q:
    'iati_identifier:{identifier_value} AND (transaction_type:2 OR transaction_type:3 OR transaction_type:4 OR transaction_type:12)',
  fl:
    'transaction_date_iso_date,transaction_provider_org_narrative,transaction_receiver_org_narrative,transaction_value,transaction_value_currency,transaction_type,transaction_provider_org_provider_activity_id,transaction_receiver_org_receiver_activity_id',
  rows: 1000,
};

export const baseTranstable: TableModuleModel = {
  title: 'Incoming transactions',
  data: [],
  columns: [
    {
      name: 'Date',
      options: {
        filter: false,
      },
    },
    {
      name: 'From',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'To',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Transaction Type',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
    {
      name: 'Transaction Value',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value && value[1] !== undefined && !isNaN(value[1])) {
            return formatMoney(value[1], value[0]);
          }
          return 'No data';
        },
      },
    },
    {
      name: 'Trace ID.',
      options: {
        filter: true,
        filterType: 'checkbox',
      },
    },
  ],
  options: {
    print: true,
    search: true,
    filter: true,
    download: true,
    rowHover: false,
    pagination: true,
    viewColumns: true,
    responsive: 'scroll',
    filterType: 'checkbox',
    selectableRows: 'none',
  },
  totalCell: true,
};
