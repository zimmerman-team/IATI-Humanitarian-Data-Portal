import { ApiModel } from 'app/state/api/interfaces';
import { BaseQuery } from 'app/interfaces/queries';
import { BaseRespModel } from 'app/interfaces/response';

export interface NarrativeItem {
  lang: string;
  narrative: string;
}

export interface TextItem {
  lang: string;
  text: string;
}

export interface RefItem {
  code: string;
  vocabulary_uri: string;
  vocabulary: {
    code: string;
    name: string;
  };
}

export interface CategoryItem {
  code: string;
}

export interface LocationItem {
  ref: string;
}

export interface DocLinkItem {
  url: string;
  format: string;
  title: {
    narrative: NarrativeItem[];
  };
  description: {
    narrative: NarrativeItem[];
  };
  category: CategoryItem[];
  language: CategoryItem[];
  document_date: {
    iso_date: string;
  };
}

export interface DimensionItem {
  name: string;
  value: string;
}

export interface BaseItem {
  iso_date: string;
  year: number;
  value: string;
  location: LocationItem[];
  dimension: DimensionItem[];
  document_link: DocLinkItem[];
  comment: {
    narrative: TextItem[];
  };
}

export interface PerTargActItem {
  value: string;
  location: LocationItem[];
  dimension: DimensionItem[];
  comment: {
    narrative: TextItem[];
  };
  document_link: DocLinkItem[];
}

export interface PeriodItem {
  period_start: {
    iso_date: string;
  };
  period_end: {
    iso_date: string;
  };
  targets: PerTargActItem[];
  actuals: PerTargActItem[];
}

export interface ResIndItem {
  measure: string;
  ascending: string;
  aggregation_status: string;
  title: {
    narrative: NarrativeItem[];
  };
  description: {
    narrative: NarrativeItem[];
  };
  document_link: DocLinkItem[];
  reference: RefItem[];
  baseline: BaseItem[];
  periods: PeriodItem[];
}

export interface ResultItem {
  // note only the first array item is valid
  // so use that, cause the structure is incorrect
  result_title?: NarrativeItem[][];
  // note only the first array item is valid
  // so use that, cause the structure is incorrect
  result_description?: NarrativeItem[][];
  result_reference?: RefItem[];
  result_document_link?: DocLinkItem[];
  // note only the first array item is valid
  // so use that, cause the structure is incorrect
  result_indicator: ResIndItem[];
}

export interface ResultsInterface
  extends ApiModel<BaseQuery, BaseRespModel<BaseQuery, ResultItem>> {}
