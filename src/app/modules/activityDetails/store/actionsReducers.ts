import { ActDetailInterface } from './interface';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';

export const actDetail: ActDetailInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};
