import { ActDetailQuery } from './store/interface';
import { TableModuleModel } from '../../components/datadisplay/Table/model';
import { formatMoney } from '../../components/datadisplay/Table/helpers';

export const actMetadataQuery: ActDetailQuery = {
  q: '*:*',
  wt: 'json',
  // So with this kind of fl we ignore the transaction data for an activity
  // because we load in the actual transaction data via a separate endpoint
  // and these transactions can be pretty massive so we don't want
  // the same/extra transaction data with the activity meta data call
  fl: `default_currency,activity_status_code,collaboration_type_code,
        capital_spend_percentage,default_flow_type_code,hierarchy,
        iati_identifier,default_finance_type_code,default_tied_status_code,
        default_lang,reporting_org:[json],title,description,
        participating_org:[json],activity_date:[json],contact_info:[json],
        recipient_country:[json],sector:[json],country_budget_items:[json],
        policy_marker:[json],default_aid_type:[json],recipient_region:[json],
        planned_disbursement:[json],budget:[json],document_link:[json],
        other_identifier:[json],humanitarian_scope:[json],
        reporting_org_narrative,reporting_org_ref,crs_add:[json],
        activity_date_type,activity_date_iso_date,fss:[json],`,
};

export const actResultsQuery = (activityIdentifier: string): ActDetailQuery => {
  return {
    q: `iati_identifier:${activityIdentifier}`,
    fl: 'result_title_narrative,result_reference,result_type',
  };
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
