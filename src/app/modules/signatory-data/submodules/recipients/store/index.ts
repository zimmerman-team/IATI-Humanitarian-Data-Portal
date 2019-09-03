import { createComponentStore } from 'easy-peasy';
import {
  HumActInterface,
  RecipientsInterface,
  RecTypesInterface,
} from './interfaces';
import {
  allRecTypes,
  humActivities,
  humRecTypes,
  recipients,
} from './actionsReducers';

export interface RecipientsStoreModel {
  recipients: RecipientsInterface;
  humActivities: HumActInterface;
  allRecTypes: RecTypesInterface;
  humRecTypes: RecTypesInterface;
}

const recipientsSt: RecipientsStoreModel = {
  recipients,
  humActivities,
  allRecTypes,
  humRecTypes,
};

export const recStore = createComponentStore(recipientsSt);
