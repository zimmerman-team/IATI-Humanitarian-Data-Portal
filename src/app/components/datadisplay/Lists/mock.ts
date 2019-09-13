import { ListModel, ListItemModel } from './model';

export const listMockData: ListModel = {
  title: 'Activity Summary',
  elName: 'summary',
  subtitle: 'Activity Summary subtitle',
  // TODO: put most of the one time elements
  //  that don't have much data(like the collaboration-type) into this
  //  activity summary, put the ones
  //  that have more data into a seperate card
  items: [
    {
      label: 'Date',
      values: [
        {
          qtc: undefined,
          ptc: '13-02-2005',
        },
      ],
    },
    {
      label: 'Scope',
      values: [
        {
          qtc: undefined,
          ptc: 'Scope name',
        },
      ],
    },
    {
      label: 'Status',
      values: [
        {
          qtc: undefined,
          ptc: 'Implementation',
        },
      ],
    },
  ],
};

export const listCellItems: ListModel = {
  title: 'Recipient Countries',
  elName: 'countries',
  tableCItems: [
    [
      {
        value: 'Countrycode',
      },
      {
        value: 'Countryname',
      },
      {
        value: '% value',
      },
    ],
    [
      {
        value: 'Countrycode',
      },
      {
        value: 'Countryname',
      },
      {
        value: '% value',
      },
    ],
    [
      {
        value: 'Countrycode',
      },
      {
        value: 'Countryname',
      },
      {
        value: '% value',
      },
    ],
  ],
};

export const listMockData2: ListModel = {
  title: 'Extra Info',
  elName: 'extra',
  subtitle: 'Extra Info',
  items: [
    {
      label: 'Collaboration type',
      values: [
        {
          qtc: undefined,
          ptc: 'Collaboration type name',
        },
      ],
    },
    {
      label: 'Default flow type',
      values: [
        {
          qtc: undefined,
          ptc: 'Default flow type name',
        },
      ],
    },
    {
      label: 'Default finance type',
      values: [
        {
          qtc: undefined,
          ptc: 'Default finance type name',
        },
      ],
    },
  ],
};

export const statusList1MockData: ListItemModel[] = [
  {
    label: 'Latest version of the IATI standard used',
    tooltip: 'Latest version of the IATI standard used',
    values: [{ version: '2.02' }],
  },
  {
    label: 'Activities with data errors',
    tooltip: 'Activities with data errors',
    values: [{ version: '2 ~10%' }],
  },
];

export const statusList2MockData: ListItemModel[] = [
  {
    label: 'Latest update',
    tooltip: 'Latest update',
    values: [{ date: 'DD MMM YY' }],
  },
  {
    label: 'Data first published',
    tooltip: 'Data first published',
    values: [{ date: 'DD MMM YY' }],
  },
];
