import { createComponentStore } from 'easy-peasy';
import { ActDetailInterface } from './interface';

import { actDetail } from './actionsReducers';

export interface ComponentStoreModel {
  actDetail: ActDetailInterface;
}

const actDetails: ComponentStoreModel = {
  actDetail,
};

export const actDetailStore = createComponentStore(actDetails);
