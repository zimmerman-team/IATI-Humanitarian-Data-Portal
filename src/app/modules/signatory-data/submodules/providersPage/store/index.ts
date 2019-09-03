import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import {
  orgtypecodelist,
  sigdataproviders,
  sigdataproviderstypes,
  humanitarianActivities,
} from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

export interface ApplicationStoreModel {
  orgtypecodelist: ActivityResponceInterface;
  sigdataproviders: ActivityResponceInterface;
  sigdataproviderstypes: ActivityResponceInterface;
  humanitarianActivities: ActivityResponceInterface;
}

const sigDataProviders: ApplicationStoreModel = {
  orgtypecodelist,
  sigdataproviders,
  sigdataproviderstypes,
  humanitarianActivities,
};

export const sigDataProvidersStore = createComponentStore(sigDataProviders);
