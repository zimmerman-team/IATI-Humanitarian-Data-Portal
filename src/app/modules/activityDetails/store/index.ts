import { createComponentStore } from 'easy-peasy';
import {
  ActMetadataInterface,
  ActResultsInterface,
  ActTransactionsInterface,
} from 'app/modules/activityDetails/store/interface';

import {
  actMetadata,
  actResults,
  incTransactions,
  outTransactions,
} from './actionsReducers';

export interface ComponentStoreModel {
  actMetadata: ActMetadataInterface;
  incTransactions: ActTransactionsInterface;
  outTransactions: ActTransactionsInterface;
  actResults: ActResultsInterface;
}

const actDetails: ComponentStoreModel = {
  actMetadata,
  incTransactions,
  outTransactions,
  actResults,
};

export const actDetailStore = createComponentStore(actDetails);
