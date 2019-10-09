import { SignatoryNavigationModel } from 'app/components/navigation/SignatoryNavigation/model';

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
          label: 'Timeliness',
          url: 'timeliness',
        },
        {
          label: 'Coverage',
          url: 'coverage',
        },
      ],
    },
    {
      fontSize: '13px',
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
