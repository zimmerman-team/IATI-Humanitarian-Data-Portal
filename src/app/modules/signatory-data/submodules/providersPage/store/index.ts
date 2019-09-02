import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import {
  orgtypecodelist,
  sigdataproviders,
  sigdataproviderstypes,
} from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

export interface ApplicationStoreModel {
  orgtypecodelist: ActivityResponceInterface;
  sigdataproviders: ActivityResponceInterface;
  sigdataproviderstypes: ActivityResponceInterface;
}

const sigDataProviders: ApplicationStoreModel = {
  orgtypecodelist,
  sigdataproviders,
  sigdataproviderstypes,
};

export const sigDataProvidersStore = createComponentStore(sigDataProviders);
