import { ApiModel } from 'app/state/api/interfaces';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

export interface ActDetailQuery {
  q: string;
  fl: string;
  wt?: string;
  rows?: number;
}

export interface ActTransactionModel {
  transaction_date_iso_date: string;
  transaction_type: string;
  transaction_value: number;
  transaction_value_currency: string;
  transaction_provider_org_provider_activity_id: string;
  transaction_receiver_org_receiver_activity_id: string;
  transaction_provider_org_narrative: string;
  transaction_receiver_org_narrative: string;
}

export interface ActResultsModel {
  result_type: string;
  result_title_narrative: string[];
  result_aggregation_status?: string;
}

export interface ActDetailResponse<DocModel> {
  responseHeader: {
    status: number;
    QTime: number;
    params: ActDetailQuery;
  };
  response: {
    numFound: number;
    start: number;
    docs: DocModel[];
  };
}

// activities metadata
export interface ActMetadataInterface
  extends ApiModel<ActDetailQuery, ActDetailResponse<SingleDefActivity>> {}

// activities transactions
export interface ActTransactionsInterface
  extends ApiModel<ActDetailQuery, ActDetailResponse<ActTransactionModel>> {}

// activities results
export interface ActResultsInterface
  extends ApiModel<ActDetailQuery, ActDetailResponse<ActResultsModel>> {}
