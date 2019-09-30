import { createComponentStore } from 'easy-peasy';
import { RecipientsInterface, RecTypesInterface } from './interfaces';
import { humActivities, humRecTypes, recipients } from './actionsReducers';
import { HumActInterface } from 'app/interfaces/general';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { sigAllProviders } from '../../providersPage/store/actionsReducers';

export interface RecipientsStoreModel {
  recipients: RecipientsInterface;
  humActivities: HumActInterface;
  humRecTypes: RecTypesInterface;
  sigAllReceivers: ActivityResponceInterface;
}

const recipientsSt: RecipientsStoreModel = {
  recipients,
  humActivities,
  humRecTypes,
  sigAllReceivers: sigAllProviders,
};

export const recStore = createComponentStore(recipientsSt);
