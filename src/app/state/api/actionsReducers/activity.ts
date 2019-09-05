import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';
import { DS_API } from 'app/config';
import { endpoints } from 'app/__consts__/endpoints';

const activities: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.activity}/select/`),
};

export default activities;
