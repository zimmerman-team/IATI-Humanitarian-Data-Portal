import { apiModel } from 'app/state/api/actionsReducers';
import { RecipientsInterface, RecTypesInterface } from './interfaces';
import { HumActInterface } from 'app/interfaces/general';
import { endpoints } from 'app/__consts__/endpoints';

export const recipients: RecipientsInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const humActivities: HumActInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/select/`
  ),
};

export const humRecTypes: RecTypesInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
