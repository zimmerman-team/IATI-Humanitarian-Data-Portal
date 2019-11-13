import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import {
  sigdataproviders,
  sigAllProviders,
} from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

export interface ApplicationStoreModel {
  sigdataproviders: ActivityResponceInterface;
  sigAllProviders: ActivityResponceInterface;
}

const sigDataProviders: ApplicationStoreModel = {
  sigdataproviders,
  sigAllProviders,
};

export const sigDataProvidersStore = createComponentStore(sigDataProviders);
