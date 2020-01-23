import { SignatoryNavigationModel } from 'app/components/navigation/SignatoryNavigation/model';

export const getLocations = orgType => {
  if (orgType === 'Government') {
    return [
      {
        items: [
          {
            label: 'Overview',
            url: 'overview',
          },
          {
            label: 'Activity List',
            url: 'activity-list',
          },
          {
            label: 'Timeliness',
            url: 'timeliness',
          },
          {
            label: 'Coverage',
            url: 'coverage',
          },
          {
            label: 'Outgoing',
            url: 'outgoing',
          },
          {
            label: 'Recipients',
            url: 'recipients',
          },
        ],
      },
    ];
  }
  return [
    {
      items: [
        {
          label: 'Overview',
          url: 'overview',
        },
        {
          label: 'Activity List',
          url: 'activity-list',
        },
        {
          label: 'Timeliness',
          url: 'timeliness',
        },
        {
          label: 'Coverage',
          url: 'coverage',
        },
        {
          label: 'Incoming',
          url: 'incoming',
        },
        {
          label: 'Funders',
          url: 'funders',
        },
        {
          label: 'Outgoing',
          url: 'outgoing',
        },
        {
          label: 'Recipients',
          url: 'recipients',
        },
      ],
    },
  ];
};

export const SubNavItemRegularMock: SignatoryNavigationModel = {
  items: [
    {
      label: 'Overview',
      url: 'overview',
    },
    {
      label: 'Activity List',
      url: 'activity-list',
    },
    {
      label: 'Timeliness',
      url: 'timeliness',
    },
    {
      label: 'Coverage',
      url: 'coverage',
    },
    {
      label: 'Incoming',
      url: 'incoming',
    },
    {
      label: 'Funders',
      url: 'funders',
    },
    {
      label: 'Outgoing',
      url: 'outgoing',
    },
    {
      label: 'Recipients',
      url: 'recipients',
    },
  ],
};
