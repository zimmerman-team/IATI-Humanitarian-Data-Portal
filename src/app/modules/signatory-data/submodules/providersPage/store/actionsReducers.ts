import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';

export const sigdataproviderstypes: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const orgtypecodelist: ActivityResponceInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/api/codelists/OrganisationType/?format=json`
  ),
};

export const humanitarianActivities: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const sigdataproviders: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};
