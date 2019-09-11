import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';
import { RecipientsInterface, RecTypesInterface } from './interfaces';
import { HumActInterface } from 'app/interfaces/general';
import { endpoints } from 'app/__consts__/endpoints';

export const recipients: RecipientsInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.transaction}/select/`),
};

export const humActivities: HumActInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.activity}/select/`),
};

export const humRecTypes: RecTypesInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.transaction}/select/`),
};
