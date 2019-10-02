import { BaseQuery } from 'app/interfaces/queries';

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

export const indicatorRefFields = indVocCodeNames => {
  return [
    {
      key: 'code',
    },
    {
      key: 'vocabulary',
      codeNames: indVocCodeNames,
    },
  ];
};

export const indicatorFields = measCodeName => {
  return [
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
      codeNames: [
        {
          code: '0',
          name: 'descending',
        },
        {
          code: '1',
          name: 'ascending',
        },
      ],
    },
    {
      key: 'aggregation_status',
      codeNames: [
        {
          code: '0',
          name: 'Cannot be aggregated',
        },
        {
          code: '1',
          name: 'Can be aggregated',
        },
      ],
    },
  ];
};

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
