import { createComponentStore } from 'easy-peasy';
import { HumActInterface, RecipientsInterface } from './interfaces';
import { humActivities, recipients } from './actionsReducers';

export interface RecipientsStoreModel {
  recipients: RecipientsInterface;
  humActivities: HumActInterface;
}

const recipientsSt: RecipientsStoreModel = {
  recipients,
  humActivities,
};

export const recStore = createComponentStore(recipientsSt);
