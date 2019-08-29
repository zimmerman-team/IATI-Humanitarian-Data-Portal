import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';
import { DS_API } from 'app/config';

export const sigdataincoming: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const sigdataincomingfundtrace: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};
