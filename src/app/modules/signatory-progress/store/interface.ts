import { ApiModel } from 'app/state/api/interfaces';

export interface PublisherQuery {
  q: string;
  'json.facet'?: string;
  rows: number;
}

export interface OrgRefItem {
  val: string;
  count: number;
}

export interface FacetsModel {
  count: number;
  org_refs: {
    buckets: OrgRefItem[];
  };
}

export interface PublisherResponse {
  responseHeader: {
    status: number;
    QTime: number;
    params: {
      q: string;
      'json.facet': string;
      rows: string;
    };
  };
  response: {
    numFound: number;
    start: number;
    // this value will be an empty array with the current response
    // so the type doesn't matter
    docs: Array<any>;
  };
  facets: FacetsModel;
}

// all publishers data interface this will be used for
// humanitarian publishers and non humanitarian publishers
export interface PublisherInterface
  extends ApiModel<PublisherQuery, PublisherResponse> {}
