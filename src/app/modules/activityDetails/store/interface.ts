import { ApiModel } from 'app/state/api/interfaces';

export interface ActDetailQuery {
  q: string;
  fl: string;
}

export interface ActDetailModel {
  iati_identifier: string;
  reporting_org_ref: string;
  reporting_org_narrative: string[];
  title: string[];
  description: string[];
  activity_date_iso_date: string[];
  activity_date_type: string[];
}

export interface ActDetailResponse {
  responseHeader: {
    status: number;
    QTime: number;
    params: ActDetailQuery;
  };
  response: {
    numFound: number;
    start: number;
    // this value will be an empty array with the current response
    // so the type doesn't matter
    docs: ActDetailModel[];
  };
}

// all publishers data interface this will be used for
// humanitarian publishers and non humanitarian publishers
export interface ActDetailInterface
  extends ApiModel<ActDetailQuery, ActDetailResponse> {}
