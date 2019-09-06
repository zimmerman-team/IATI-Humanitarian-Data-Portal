import { createComponentStore } from 'easy-peasy';
import { RecipientsInterface, RecTypesInterface } from './interfaces';
import {
  allRecTypes,
  humActivities,
  humRecTypes,
  recipients,
} from './actionsReducers';
import { HumActInterface } from 'app/interfaces/general';

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
