import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';

export const humanitarianActivities: ActivityResponceInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/select/`
  ),
};

export const sigdataproviders: ActivityResponceInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const sigAllProviders: ActivityResponceInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
