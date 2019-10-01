import { ListModel } from 'app/components/datadisplay/Lists/model';
import { InPageNavModel } from 'app/components/navigation/InPageNavigation/model';

export const listMockData1: ListModel = {
  elName: 'incComms',
  items: [
    {
      label: 'Latest version of the IATI standard used',
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      values: [
        {
          version: 'V2.03',
        },
      ],
    },
    {
      label: 'Activities with data errors',
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      values: [
        {
          version: '2 - 10 %',
        },
      ],
    },
  ],
};

export const listMockData2: ListModel = {
  elName: 'incComms',
  items: [
    {
      label: 'Latest update',
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      values: [
        {
          version: '12 07 2016',
        },
      ],
    },
    {
      label: 'Date first published',
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      values: [
        {
          version: '12 07 2009',
        },
      ],
    },
  ],
};


export const sigDataOverviewNavItems: InPageNavModel = {
  lists: [
    {
      title: 'Activity Summary',
      elName: 'summary',
    },
    {
      title: 'FTS Import related',
      elName: 'fts',
    },
    {
      title: 'Grand Bargain classifications',
      elName: 'GBClass',
    },
    {
      title: 'Other classifications of intererest',
      elName: 'otherClass',
    },
    {
      title: 'Humanitarian results',
      elName: 'humanitarian',
    },
    {
      title: 'Location information',
      elName: 'location',
    },
  ],
};
