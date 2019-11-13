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
    key: 'title.narratives',
    extLink: 'url',
  },
  {
    colHeading: 'Description',
    key: 'description.narratives',
  },
  {
    colHeading: 'Categories',
    key: 'categories',
    arrayKey: 'category.name',
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
      key: 'vocabulary.code',
      codeNames: indVocCodeNames,
    },
  ];
};

export const indicatorFields = measCodeName => {
  return [
    {
      colHeading: 'Title',
      key: 'title.narratives',
    },
    {
      colHeading: 'Description',
      key: 'description.narratives',
    },
    {
      colHeading: 'Measure',
      key: 'measure.code',
      codeNames: measCodeName,
    },
    {
      colHeading: 'Behaviour',
      key: 'ascending',
      codeNames: [
        {
          code: false,
          name: 'descending',
        },
        {
          code: true,
          name: 'ascending',
        },
      ],
    },
    {
      colHeading: 'Aggregation status',
      key: 'aggregation_status',
      codeNames: [
        {
          code: false,
          name: 'Cannot be aggregated',
        },
        {
          code: true,
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
    key: 'locations',
    arrKey: 'ref',
  },
  {
    colHeading: 'Comment',
    key: 'comment.narratives',
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
    key: 'locations',
    arrayKey: 'ref',
  },
  {
    colHeading: 'Comment',
    key: 'comment.narratives',
  },
];
