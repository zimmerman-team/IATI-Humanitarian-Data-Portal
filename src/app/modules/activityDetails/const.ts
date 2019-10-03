/* models/ interfaces */
import { ActDetailQuery } from 'app/modules/activityDetails/store/interface';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

/* helpers */
import { formatMoney } from 'app/components/datadisplay/Table/helpers';

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
        other_identifier:[json],humanitarian_scope:[json],location:[json],
        reporting_org_narrative,reporting_org_ref,crs_add:[json],
        activity_date_type,activity_date_iso_date,fss:[json],related_activity:[json],
        legacy_data:[json],conditions:[json],activity_scope_code`,
};

export const actResultsQuery = (activityIdentifier: string): ActDetailQuery => {
  return {
    q: `iati_identifier:${activityIdentifier}`,
    fl: 'result_title_narrative,result_aggregation_status,result_type,id',
    rows: 10000,
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
    rowHover: true,
    pagination: true,
    viewColumns: true,
    selectableRows: 'none',
  },
};

export const fssFields = [
  {
    key: 'year',
  },
  {
    key: 'value',
    value: true,
  },
];

export const crsAddFields = [
  {
    key: 'channel_code',
    label: 'Channel code',
  },
  { key: 'other_flags', label: 'Other flag codes', arrayKey: 'code' },
  { key: 'loan_terms.rate.1', label: 'Loan term rates 1' },
  { key: 'loan_terms.rate.2', label: 'Loan term rates 2' },
  {
    key: 'loan_terms.repayment.type_code',
    label: 'Loan terms repayment code',
  },
  {
    key: 'loan_terms.repayment.plan_code',
    label: 'Loan terms repayment plan',
  },
  {
    key: 'loan_terms.repayment.first_date_iso_date',
    label: 'Loan terms repayment start',
  },
  {
    key: 'loan_terms.repayment.final_date_iso_date',
    label: 'Loan terms repayment end',
  },
  {
    key: 'loan_terms.commitment.date_iso_date',
    label: 'Loan terms commitment date',
  },
  {
    key: 'loan_terms.commitment.date_iso_date',
    label: 'Loan terms commitment date',
  },
  {
    key: 'loan_status.year',
    label: 'Loan date',
  },
  {
    key: 'loan_status.currency',
    label: 'Loan currency',
  },
  {
    key: 'loan_status.interest_received',
    label: 'Loan interest received',
  },
  {
    key: 'loan_status.principal_outstanding',
    label: 'Loan principal outstanding',
  },
  {
    key: 'loan_status.principal_arrears',
    label: 'Loan principal arrears',
  },
  {
    key: 'loan_status.interest_arrears',
    label: 'Loan interest arrears',
  },
];

export const docLinkFields = [
  {
    key: 'title',
    narrative: true,
    extLink: 'url',
  },
  {
    key: 'category',
    arrayKey: 'name',
  },
  {
    key: 'document_date.iso_date',
  },
];

export const disbursFields = (orgTypeNames, budgTypeNames) => {
  return [
    {
      key: 'type',
      codeNames: budgTypeNames,
    },
    {
      key: 'period_start',
    },
    {
      key: 'period_end',
    },
    {
      key: 'value',
      value: true,
    },
    {
      key: 'provider_org.narrative',
    },
    {
      key: 'provider_org.ref',
    },
    {
      key: 'provider_org.type',
      codeNames: orgTypeNames,
    },
    {
      key: 'receiver_org.narrative',
    },
    {
      key: 'receiver_org.ref',
    },
    {
      key: 'receiver_org.type',
      codeNames: orgTypeNames,
    },
  ];
};

export const budgetFields = (budgTypeNames, budgStatusNames) => {
  return [
    {
      key: 'type',
      codeNames: budgTypeNames,
    },
    {
      key: 'status',
      codeNames: budgStatusNames,
    },
    {
      key: 'period_start',
    },
    {
      key: 'period_end',
    },
    {
      key: 'value',
      value: true,
    },
  ];
};

export const defAidTypeFields = defAidTypeVocNames => {
  return [
    {
      key: 'code',
    },
    {
      key: 'vocabulary',
      codeNames: defAidTypeVocNames,
    },
  ];
};

export const polMarkerFields = (
  polMarkCodeNames,
  policMSignificanceName,
  polMarkerVocabNames
) => {
  return [
    {
      key: 'narrative',
    },
    {
      key: 'code',
      codeNames: polMarkCodeNames,
    },
    {
      key: 'significance',
      codeNames: policMSignificanceName,
    },
    {
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
    {
      key: 'vocabulary',
      codeNames: polMarkerVocabNames,
    },
  ];
};

export const humScopeFields = (humScopTypeNames, humVocNames) => {
  return [
    {
      key: 'narrative',
    },
    {
      key: 'code',
    },
    {
      key: 'type',
      codeNames: humScopTypeNames,
    },
    {
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
    {
      key: 'vocabulary',
      codeNames: humVocNames,
    },
  ];
};

export const countBufgItFields = [
  {
    key: 'description',
    narrative: true,
  },
  {
    key: 'code',
  },
  {
    key: 'percentage',
    suffix: '%',
  },
];

export const tagFields = tagVocNames => {
  return [
    {
      key: 'narrative',
    },
    {
      key: 'code',
    },
    {
      key: 'vocabulary',
      codeNames: tagVocNames,
    },
    {
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
  ];
};

export const sectorFields = [
  {
    key: 'code',
  },
  {
    key: 'narrative',
  },
  {
    key: 'percentage',
    suffix: '%',
  },
];

export const recRegFields = regVocNames => {
  return [
    {
      key: 'narrative',
    },
    {
      key: 'code',
    },
    {
      key: 'percentage',
      suffix: '%',
    },
    {
      key: 'vocabulary',
      codeNames: regVocNames,
    },
    {
      key: 'vocabulary_uri',
      extLink: 'vocabulary_uri',
    },
  ];
};

export const recCountFields = [
  {
    key: 'narrative',
  },
  {
    key: 'code',
  },
  {
    key: 'percentage',
    suffix: '%',
  },
];

export const contInfoFields = contactTypeNames => {
  return [
    {
      key: 'type',
      codeNames: contactTypeNames,
    },
    {
      key: 'telephone',
    },
    {
      key: 'email',
    },
    {
      key: 'website',
      extLink: 'website',
    },
    {
      key: 'organisation_narrative',
    },
    {
      key: 'department_narrative',
    },
    {
      key: 'person_name_narrative',
    },
    {
      key: 'job_title_narrative',
    },
    {
      key: 'mailing_address_narrative',
    },
  ];
};

export const othIdFields = othIDTypeNames => {
  return [
    {
      key: 'ref',
    },
    {
      key: 'type',
      codeNames: othIDTypeNames,
    },
    {
      key: 'owner_org_narrative',
    },
    {
      key: 'owner_org_ref',
    },
  ];
};

export const partOrgFields = (orgTypeNames, orgRoleNames) => {
  return [
    {
      key: 'narrative',
    },
    {
      key: 'ref',
    },
    {
      key: 'type',
      codeNames: orgTypeNames,
    },
    {
      key: 'role',
      codeNames: orgRoleNames,
    },
  ];
};

export const repOrgFields = [
  { key: 'narrative', label: 'Title' },
  { key: 'type.name', label: 'Type' },
  { key: 'ref', label: 'Reference' },
];

export const actSummFields = (
  actStatusNames,
  actScopeNames,
  colabTypeNames,
  defFlowTypeNames,
  defTiedStatusName
) => {
  return [
    {
      key: 'activity_status_code',
      label: 'Status',
      codeNames: actStatusNames,
    },
    {
      key: 'activity_scope_code',
      label: 'Scope',
      codeNames: actScopeNames,
    },
    {
      key: 'collaboration_type_code',
      label: 'Collaboration type',
      codeNames: colabTypeNames,
    },
    {
      key: 'default_flow_type_code',
      label: 'Default flow type',
      codeNames: defFlowTypeNames,
    },
    {
      key: 'default_finance_type_code',
      label: 'Default finance type',
    },
    {
      key: 'default_tied_status_code',
      label: 'Default tied status',
      codeNames: defTiedStatusName,
    },
    {
      key: 'capital_spend_percentage',
      label: 'Capital spend',
      suffix: '%',
    },
    {
      key: 'activity_date',
      label: 'Planned start',
      searchKey: 'type',
      searchValue: '1',
      foundKey: 'iso_date',
    },
    {
      key: 'activity_date',
      label: 'Actual start',
      searchKey: 'type',
      searchValue: '2',
      foundKey: 'iso_date',
    },
    {
      key: 'activity_date',
      label: 'Planned end',
      searchKey: 'type',
      searchValue: '3',
      foundKey: 'iso_date',
    },
    {
      key: 'activity_date',
      label: 'Actual end',
      searchKey: 'type',
      searchValue: '4',
      foundKey: 'iso_date',
    },
  ];
};

export const locationFields = (
  locReachNames,
  locVocNames,
  locExNames,
  locClassNames
) => {
  return [
    {
      key: 'name_narrative',
    },
    {
      key: 'ref',
    },
    {
      key: 'location_reach_code',
      codeNames: locReachNames,
    },
    {
      key: 'location_id_vocabulary',
      codeNames: locVocNames,
    },
    {
      key: 'description_narrative',
    },
    {
      key: 'activity_description_narrative',
    },
    {
      key: 'point_pos',
    },
    {
      key: 'exactness_code',
      codeNames: locExNames,
    },
    {
      key: 'location_class_code',
      codeNames: locClassNames,
    },
    {
      key: 'feature_designation_code',
    },
  ];
};

export const relActFields = relActTypes => {
  return [
    {
      key: 'ref',
      intLink: 'ref',
      intLinkForm: '/activity-detail/{id}',
    },
    {
      key: 'type',
      codeNames: relActTypes,
    },
  ];
};

export const legDataFields = [
  {
    key: 'name',
  },
  {
    key: 'value',
  },
  {
    key: 'iati_equivalent',
  },
];

export const conditionsFields = condCodeNames => {
  return [
    {
      key: 'type',
      codeNames: condCodeNames,
    },
    {
      key: 'narrative',
    },
  ];
};
