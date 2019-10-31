import { StateContainerModel } from 'app/modules/landing/common/StatContainer/models';
export const mockData: StateContainerModel = {
  items: [
    {
      description: 'Grand Bargain Signatories',
      value: 89,
      signatorytype: 'gb',
    },
    {
      description: 'GB signatories publishing to IATI',
      value: 300,
      signatorytype: 'iati',
    },
    {
      description: 'Signatories or their affiliates publishing humanitarian data ',
      value: 2,
      signatorytype: 'humanitarian',
    },
  ],
};
