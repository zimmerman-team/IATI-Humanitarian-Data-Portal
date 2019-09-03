import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';
import {
  HumActInterface,
  RecipientsInterface,
  RecTypesInterface,
} from './interfaces';

export const recipients: RecipientsInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};

export const humActivities: HumActInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const allRecTypes: RecTypesInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};

export const humRecTypes: RecTypesInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};
