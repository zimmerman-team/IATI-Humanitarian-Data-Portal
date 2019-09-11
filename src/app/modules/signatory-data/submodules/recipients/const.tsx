import React from 'react';

/* models/interfaces */
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { RecipientsQueryModel, RecTypesQueryModel } from './store/interfaces';

export const recipientsQuery = (
  repOrgRef: string,
  iatiIdentifiers: string
): RecipientsQueryModel => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND (transaction_humanitarian:1 OR iati_identifier:(${iatiIdentifiers}))`,
    stats: true,
    'facet.pivot':
      '{!stats=piv1}transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type,iati_identifier,transaction_type,transaction_value_currency,title_narrative',
    rows: 0,
    facet: 'on',
    'stats.field': '{!tag=piv1 sum=true}transaction_value',
    'facet.limit': -1,
    'facet.missing': true,
  };
};

export const recHumTypesQuery = (
  repOrgRef: string,
  iatiIdentifiers: string
): RecTypesQueryModel => {
  return {
    q: `reporting_org_ref:${repOrgRef} AND (transaction_humanitarian:1 OR iati_identifier:(${iatiIdentifiers}))`,
    rows: 0,
    'json.facet':
      "{ orgTypes: { type: 'terms', field: 'transaction_receiver_org_type', facet: { org_count: 'unique(transaction_receiver_org_narrative)' }, }, }",
  };
};

export const recAllTypesQuery = (repOrgRef: string): RecTypesQueryModel => {
  return {
    q: `reporting_org_ref:${repOrgRef}`,
    rows: 0,
    'json.facet':
      "{ orgTypes: { type: 'terms', field: 'transaction_receiver_org_type', facet: { org_count: 'unique(transaction_receiver_org_narrative)' }, }, }",
  };
};

// so this query gets the humanitarian activity identifiers
// of a specified signatory
// which do have 'transaction_receiver'(recipient) data
export const humActQuery = {
  q:
    'reporting_org_ref:{rep_org_ref} AND (transaction_receiver_org_narrative:* OR transaction_receiver_org_ref:*) AND (humanitarian:1 OR sector_vocabulary:1 OR (-sector_vocabulary:* AND sector_code:[70000 TO 79999]))',
  fl: 'iati_identifier',
  rows: 100000,
};

export const recBaseTable: TableModuleModel = {
  title: 'Recipients',
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
      name: 'Transactions',
      options: { filter: false },
    },
    {
      name: 'Transaction type',
      options: { filter: false },
    },
    {
      name: 'Amount',
      options: { filter: false },
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
    renderExpandableRow: (rowData, rowMeta) => {
      console.log('rowMeta', rowMeta);
      return <></>;
    },
  },
  columnsCell: ['', '', '', '', '', ''],
  totalCell: false,
};
