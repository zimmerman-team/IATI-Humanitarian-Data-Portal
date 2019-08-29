import { createComponentStore } from 'easy-peasy';
import { ActMetadataInterface, ActTransactionsInterface } from './interface';

import {
  actMetadata,
  incTransactions,
  outTransactions,
} from './actionsReducers';

export interface ComponentStoreModel {
  actMetadata: ActMetadataInterface;
  incTransactions: ActTransactionsInterface;
  outTransactions: ActTransactionsInterface;
}

const actDetails: ComponentStoreModel = {
  actMetadata,
  incTransactions,
  outTransactions,
};

export const actDetailStore = createComponentStore(actDetails);
