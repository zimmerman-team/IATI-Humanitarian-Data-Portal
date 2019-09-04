import { ApiModel } from 'app/state/api/interfaces';

export interface CovQueryModel {
  q: string;
  'json.facet': string;
  rows: number;
}

export interface CovItemModel {
  val: string;
  count: number;
  transaction_sum: number;
}

export interface CovTimeItemModel {
  val: string;
  count: number;
  incom_funds: {
    count: number;
    trans_currency?: {
      buckets: CovItemModel[];
    };
  };
  disbs_expends: {
    count: number;
    trans_currency?: {
      buckets: CovItemModel[];
    };
  };
}

export interface CovRespModel {
  responseHeader: {
    status: number;
    QTime: number;
    params: CovQueryModel;
  };
  response: {
    numFound: number;
    start: number;
    // this guy will be empty
    docs: any[];
  };
  facets: {
    counts: number;
    transactions: {
      buckets: CovTimeItemModel[];
    };
  };
}

// interface to get humanitarian activities
// associated with the signatory
export interface CoverageInterface
  extends ApiModel<CovQueryModel, CovRespModel> {}
