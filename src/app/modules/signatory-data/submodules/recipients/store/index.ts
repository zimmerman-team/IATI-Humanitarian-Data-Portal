import { createComponentStore } from 'easy-peasy';
import {
  RecipientsInterface,
  RecTypesInterface,
} from 'app/modules/signatory-data/submodules/recipients/store/interfaces';
import {
  humRecTypes,
  recipients,
} from 'app/modules/signatory-data/submodules/recipients/store/actionsReducers';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { sigAllProviders } from 'app/modules/signatory-data/submodules/providersPage/store/actionsReducers';

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
