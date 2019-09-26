import { BaseQuery } from 'app/interfaces/queries';

/* consts */
import {
  indVocCodeNames,
  measCodeName,
} from 'app/__consts__/iati_standard_code_names';

export const ResultQuery = (resId): BaseQuery => {
  return {
    q: `id:${resId}`,
    fl:
      'result_title:[json],result_description:[json],result_document_link:[json],result_reference:[json],result_indicator:[json]',
    wt: 'json',
  };
};

export const resDocLinkFields = [
  {
    key: 'title.narrative',
    extLink: 'url',
  },
  {
    key: 'description.narrative',
  },
  {
    key: 'category',
    arrayKey: 'code',
  },
  {
    key: 'document_date.iso_date',
  },
];

export const resRefFields = [
  {
    key: 'code',
  },
  {
    key: 'vocabulary.name',
    extLink: 'vocabulary_uri',
  },
];

export const indicatorRefFields = [
  {
    key: 'code',
  },
  {
    key: 'vocabulary',
    codeNames: indVocCodeNames,
  },
];

export const indicatorFields = [
  {
    key: 'title.narrative',
  },
  {
    key: 'description.narrative',
  },
  {
    key: 'measure',
    codeNames: measCodeName,
  },
  {
    key: 'ascending',
    codeNames: { '0': 'descending', '1': 'ascending' },
  },
  {
    key: 'aggregation_status',
    codeNames: { '0': 'Cannot be aggregated', '1': 'Can be aggregated' },
  },
];

export const baselineFields = [
  {
    key: 'iso_date',
  },
  {
    key: 'year',
  },
  {
    key: 'value',
    emptyValString: 'Qualitive',
  },
  {
    key: 'location',
    arrKey: 'ref',
  },
  {
    key: 'comment.narrative',
  },
];

export const dimensionFields = [
  {
    key: 'name',
  },
  {
    key: 'value',
  },
];

export const targActFields = [
  {
    key: 'value',
    emptyValString: 'Qualitive',
  },
  {
    key: 'location',
    arrKey: 'ref',
  },
  {
    key: 'comment.narrative',
  },
];
