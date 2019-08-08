import { StateContainerModel } from './models';
export const mockData: StateContainerModel = {
  items: [
    {
      description: 'Grand Bargain Signatories',
      value: 89,
      signatoryType: 'gb',
    },
    {
      description: 'GB signatories publishing to IATI',
      value: 250,
      signatoryType: 'iati',
    },
    {
      description: 'Signatories & affiliates publishing humanitarian data ',
      value: 2,
      signatoryType: 'humanitarian',
    },
  ],
};
