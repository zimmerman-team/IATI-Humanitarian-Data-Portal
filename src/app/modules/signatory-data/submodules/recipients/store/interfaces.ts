import { ApiModel } from 'app/state/api/interfaces';
import { BaseRespModel } from 'app/interfaces/response';
import { BaseQuery } from 'app/interfaces/queries';

export interface RecTypesQueryModel extends BaseQuery {
  'json.facet': string;
}

export interface RecipientsQueryModel extends BaseQuery {
  facet: string;
  'facet.pivot': string;
  'facet.limit': number;
  stats: boolean;
  'stats.field': string;
  'facet.missing': boolean;
}

export interface RecTypesItemModel {
  val: string;
  count: number;
  org_count: number;
}

export interface PivotItemModel {
  field: string;
  value: string | null;
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

export const pivotKey =
  'transaction_receiver_org_narrative,transaction_receiver_org_ref,transaction_receiver_org_type,iati_identifier,transaction_type,transaction_value_currency';

export interface RecTypeRespModel<QueryModel, DocModel>
  extends BaseRespModel<QueryModel, DocModel> {
  facets: {
    count: number;
    orgTypes: {
      buckets: RecTypesItemModel[];
    };
  };
}

export interface RecipientsRespModel<QueryModel, DocModel>
  extends BaseRespModel<QueryModel, DocModel> {
  facet_counts: {
    facet_queries: object;
    facet_fields: object;
    facet_ranges: object;
    facet_intervals: object;
    facet_heatmaps: object;
    facet_pivot: {
      [pivotKey]: PivotItemModel[];
    };
  };
}

export interface RecipientsInterface
  extends ApiModel<
    RecipientsQueryModel,
    RecipientsRespModel<RecipientsQueryModel, any>
  > {}

export interface RecTypesInterface
  extends ApiModel<
    RecTypesQueryModel,
    RecTypeRespModel<RecTypesQueryModel, any>
  > {}