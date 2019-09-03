import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';
import { HumActInterface, RecipientsInterface } from './interfaces';

export const recipients: RecipientsInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};

export const humActivities: HumActInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};
