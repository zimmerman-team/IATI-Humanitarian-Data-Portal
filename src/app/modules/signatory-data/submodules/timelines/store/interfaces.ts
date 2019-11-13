import { ApiModel } from 'app/state/api/interfaces';
import { BaseRespModel } from 'app/interfaces/response';
import { BaseQuery } from 'app/interfaces/queries';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

export interface TimelagQueryModel {
  q: string;
  'json.facet': string;
  rows: number;
}

export interface TimelagItemModel {
  val: string;
  count: number;
}

export interface TimelagResponseModel
  extends BaseRespModel<TimelagQueryModel, any> {
  facets: {
    count: number;
    monthly_transactions: {
      buckets: TimelagItemModel[];
    };
  };
}

export interface FrequencyQuery {
  tableName: string;
  qField: string;
  qOperator: string;
  qValue: string;
  sort: string;
}

export interface FrequencyItem {
  _id: string;
  sig_id: string;
  sig_ref: string;
  sig_short_name: string;
  sig_long_name: string;
  last_trans_date: string;
  actual_date: string;
  month_date: string;
  updates_for_month: number;
}

export interface FirstPublishInterface
  extends ApiModel<BaseQuery, BaseRespModel<BaseQuery, SingleDefActivity>> {}

export interface FrequencyInterface
  extends ApiModel<FrequencyQuery, FrequencyItem[]> {}

// interface to get humanitarian activities
// associated with the signatory
export interface TimelagInterface
  extends ApiModel<TimelagQueryModel, TimelagResponseModel> {}
