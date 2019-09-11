import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import {
  orgtypecodelist,
  sigdataproviders,
  humanitarianActivities,
  sigAllProviders,
} from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

export interface ApplicationStoreModel {
  orgtypecodelist: ActivityResponceInterface;
  sigdataproviders: ActivityResponceInterface;
  humanitarianActivities: ActivityResponceInterface;
  sigAllProviders: ActivityResponceInterface;
}

const sigDataProviders: ApplicationStoreModel = {
  orgtypecodelist,
  sigdataproviders,
  humanitarianActivities,
  sigAllProviders,
};

export const sigDataProvidersStore = createComponentStore(sigDataProviders);
