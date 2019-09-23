import { SignatoryNavigationModel } from './model';

export const locations: SignatoryNavigationModel = {
  locations: [
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
          label: 'Timelines',
          url: 'timelines',
        },
        {
          label: 'Coverage',
          url: 'coverage',
        },
      ],
    },
    {
      fontSize: 5,
      items: [
        {
          label: 'Incoming',
          url: 'incoming',
        },
        {
          label: 'Providers',
          url: 'providers',
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
  ],
  activity: 'ActionAid UK',
};
