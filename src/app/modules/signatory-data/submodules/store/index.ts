import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { checkSigDateTypeAvailable } from 'app/modules/signatory-data/submodules/store/actionsReducers';

export interface ComponentStoreModel {
  checkSigDateTypeAvailable: ActivityResponceInterface;
}

const sigDataStoreConst: ComponentStoreModel = {
  checkSigDateTypeAvailable,
};

export const sigDataStore = createComponentStore(sigDataStoreConst);
