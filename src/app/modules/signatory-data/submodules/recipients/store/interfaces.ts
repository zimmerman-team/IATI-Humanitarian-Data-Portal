export interface RecipientsQueryModel {
  q: string;
  rows: number;
  facet: string;
  stats: boolean;
  'stats.field': string;
  'facet.pivot': string;
}

export interface PivotItemModel {
  field: string;
  value: string;
  count: number;
  pivot?: PivotItemModel[];
  stats: {
    stats_fields: {
      transaction_value: {
        sum: number;
      };
    };
  };
}

export interface RecipientsRespModel {
  responseHeader: {
    status: number;
    QTime: number;
    params: RecipientsQueryModel;
  };
  response: {
    numFound: number;
    start: number;
    // this guy will be empty
    docs: any[];
  };
  facet_counts: {
    facet_queries: object;
    facet_fields: object;
    facet_ranges: object;
    facet_intervals: object;
    facet_heatmaps: object;
    facet_pivot: {
      'transaction_receiver_org_narrative,transaction_receiver_org_ref,iati_identifier,transaction_type,transaction_value_currency': PivotItemModel[];
    };
  };
}

// TODO:
// url to work with: https://test-datastore.iatistandard.org/search/transaction/select/?q=reporting_org_ref:XM-DAC-xz928&rows=0&facet=on&stats=true&stats.field={!tag=piv1%20sum=true}transaction_value&facet.pivot={!stats=piv1}transaction_receiver_org_narrative,transaction_receiver_org_ref,iati_identifier,transaction_type,transaction_value_currency
