import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import {
  sigdataproviders,
  humanitarianActivities,
  sigAllProviders,
} from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

export interface ApplicationStoreModel {
  sigdataproviders: ActivityResponceInterface;
  humanitarianActivities: ActivityResponceInterface;
  sigAllProviders: ActivityResponceInterface;
}

const sigDataProviders: ApplicationStoreModel = {
  sigdataproviders,
  humanitarianActivities,
  sigAllProviders,
};

export const sigDataProvidersStore = createComponentStore(sigDataProviders);
