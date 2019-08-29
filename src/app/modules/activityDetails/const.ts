import { ActDetailQuery } from './store/interface';

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
};

export const outTransactionsQuery: ActDetailQuery = {
  q:
    'iati_identifier:{identifier_value} AND (transaction_type:2 OR transaction_type:3 OR transaction_type:4 OR transaction_type:12)',
  fl:
    'transaction_date_iso_date,transaction_provider_org_narrative,transaction_receiver_org_narrative,transaction_value,transaction_value_currency,transaction_type,transaction_provider_org_provider_activity_id,transaction_receiver_org_receiver_activity_id',
};
