import { ApiModel } from 'app/state/api/interfaces';
import { BaseRespModel } from 'app/interfaces/response';

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

// interface to get humanitarian activities
// associated with the signatory
export interface TimelagInterface
  extends ApiModel<TimelagQueryModel, TimelagResponseModel> {}
