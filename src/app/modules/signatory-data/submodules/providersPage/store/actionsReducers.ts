import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiPOSTModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';

export const sigdataproviders: ActivityResponceInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const sigAllProviders: ActivityResponceInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
