import { createComponentStore } from 'easy-peasy';
import { RecipientsInterface, RecTypesInterface } from './interfaces';
import { humRecTypes, recipients } from './actionsReducers';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { sigAllProviders } from '../../providersPage/store/actionsReducers';

export interface RecipientsStoreModel {
  recipients: RecipientsInterface;
  humRecTypes: RecTypesInterface;
  sigAllReceivers: ActivityResponceInterface;
}

const recipientsSt: RecipientsStoreModel = {
  recipients,
  humRecTypes,
  sigAllReceivers: sigAllProviders,
};

export const recStore = createComponentStore(recipientsSt);
