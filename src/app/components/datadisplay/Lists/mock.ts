import { ListModel, ListItemModel } from './model';

export const listMockData: ListModel = {
  title: 'Activity Summary',
  subtitle: 'Activity Summary subtitle',
  items: [
    {
      label: 'For humanitarian activities',
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      values: [
        {
          qtc: 1,
          ptc: 2,
        },
      ],
    },
    {
      label: 'Has funding recipient details',
      values: [
        {
          qtc: 3,
          ptc: 4,
        },
      ],
    },
    {
      label: 'With organisation type provided',
      values: [
        {
          qtc: undefined,
          ptc: 6,
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
