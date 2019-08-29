import { ApiModel } from 'app/state/api/interfaces';

export interface ActDetailQuery {
  q: string;
  fl: string;
}

export interface ActMetadataModel {
  iati_identifier: string;
  reporting_org_ref: string;
  reporting_org_narrative: string[];
  title: string[];
  description: string[];
  activity_date_iso_date: string[];
  activity_date_type: string[];
}

export interface ActTransactionModel {
  transaction_date_iso_date: string;
  transaction_type: string;
  transaction_value: number;
  transaction_value_currency: string;
  transaction_provider_org_provider_activity_id: string;
  transaction_provider_org_narrative: string;
  transaction_receiver_org_narrative: string;
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
  extends ApiModel<ActDetailQuery, ActDetailResponse<ActMetadataModel>> {}

// activities transactions
export interface ActTransactionsInterface
  extends ApiModel<ActDetailQuery, ActDetailResponse<ActTransactionModel>> {}
