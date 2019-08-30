import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import {
  orgtypecodelist,
  sigdataproviderstypes,
} from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

export interface ApplicationStoreModel {
  orgtypecodelist: ActivityResponceInterface;
  sigdataproviderstypes: ActivityResponceInterface;
}

const sigDataProviders: ApplicationStoreModel = {
  orgtypecodelist,
  sigdataproviderstypes,
};

export const sigDataProvidersStore = createComponentStore(sigDataProviders);
