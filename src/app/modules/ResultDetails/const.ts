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
    colHeading: 'Title',
    key: 'title.narrative',
    extLink: 'url',
  },
  {
    colHeading: 'Description',
    key: 'description.narrative',
  },
  {
    colHeading: 'Categories',
    key: 'category',
    arrayKey: 'code',
  },
  {
    colHeading: 'Date',
    key: 'document_date.iso_date',
  },
];

export const resRefFields = [
  {
    colHeading: 'Code',
    key: 'code',
  },
  {
    colHeading: 'Vocabulary',
    key: 'vocabulary.name',
    extLink: 'vocabulary_uri',
  },
];

export const indicatorRefFields = indVocCodeNames => {
  return [
    {
      colHeading: 'Code',
      key: 'code',
    },
    {
      colHeading: 'Vocabulary',
      key: 'vocabulary',
      codeNames: indVocCodeNames,
    },
  ];
};

export const indicatorFields = measCodeName => {
  return [
    {
      colHeading: 'Title',
      key: 'title.narrative',
    },
    {
      colHeading: 'Description',
      key: 'description.narrative',
    },
    {
      colHeading: 'Measure',
      key: 'measure',
      codeNames: measCodeName,
    },
    {
      colHeading: 'Behaviour',
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
      colHeading: 'Aggregation status',
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
    colHeading: 'Date',
    key: 'iso_date',
  },
  {
    colHeading: 'Baseline year',
    key: 'year',
  },
  {
    colHeading: 'Value',
    key: 'value',
    emptyValString: 'Qualitive',
  },
  {
    colHeading: 'Locations',
    key: 'location',
    arrKey: 'ref',
  },
  {
    colHeading: 'Comment',
    key: 'comment.narrative',
  },
];

export const dimensionFields = [
  {
    colHeading: 'Name',
    key: 'name',
  },
  {
    colHeading: 'Value',
    key: 'value',
  },
];

export const targActFields = [
  {
    colHeading: 'Value',
    key: 'value',
    emptyValString: 'Qualitive',
  },
  {
    colHeading: 'Locations',
    key: 'location',
    arrayKey: 'ref',
  },
  {
    colHeading: 'Comment',
    key: 'comment.narrative',
  },
];
