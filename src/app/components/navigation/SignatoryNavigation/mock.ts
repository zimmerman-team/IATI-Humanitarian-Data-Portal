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
        ],
      },
      {
        fontSize: '13px',
        items: [
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
