import { apiPOSTModel } from 'app/state/api/actionsReducers';
import {
  RecipientsInterface,
  RecTypesInterface,
} from 'app/modules/signatory-data/submodules/recipients/store/interfaces';
import { endpoints } from 'app/__consts__/endpoints';

export const recipients: RecipientsInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const humRecTypes: RecTypesInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
