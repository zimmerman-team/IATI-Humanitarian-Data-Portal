import { ListModel } from './model';

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
