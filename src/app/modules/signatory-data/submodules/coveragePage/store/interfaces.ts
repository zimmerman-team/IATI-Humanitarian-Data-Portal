import { ApiModel } from 'app/state/api/interfaces';
import { BaseQuery } from 'app/interfaces/queries';
import { BaseRespModel } from 'app/interfaces/response';

export interface CovItemModel {
  val: string;
  count: number;
  transaction_sum: number;
}

export interface OrgTotExpItemModel {
  period_start: string;
  period_end: string;
  value: number;
  currency?: string;
  value_date: string;
  // this is any cause it shouldn't even exist in the
  // response and we will definetely NOT gonna use it
  budget_line: any;
}

export interface CovOrgItemModel {
  organisation_default_currency_code: string;
  organisation_total_expenditure?: OrgTotExpItemModel[];
}

export interface CovTimeItemModel {
  val: string;
  count: number;
  trans_currency?: {
    buckets: CovItemModel[];
  };
}

export interface CovRespModel {
  responseHeader: {
    status: number;
    QTime: number;
    params: BaseQuery;
  };
  response: {
    numFound: number;
    start: number;
    // this guy will be empty
    docs: any[];
  };
  facets: {
    count: number;
    disbs_expends: {
      count: number;
      date_range: {
        buckets: CovTimeItemModel[];
      };
    };
  };
}

export interface CoverageInterface extends ApiModel<BaseQuery, CovRespModel> {}

export interface CovOrgInterface
  extends ApiModel<BaseQuery, BaseRespModel<BaseQuery, CovOrgItemModel>> {}
