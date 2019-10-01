export interface BaseQuery {
  q: string;
  sort?: string;
  rows?: number;
  fl?: string;
  wt?: string;
  'json.facet'?: string;
}
