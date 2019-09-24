export interface BaseQuery {
  q: string;
  rows?: number;
  fl?: string;
  wt?: string;
  'json.facet'?: string;
}
