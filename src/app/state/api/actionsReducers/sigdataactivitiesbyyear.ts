import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiPOSTModel } from './index';
import { DS_API } from 'app/config';
import { endpoints } from 'app/__consts__/endpoints';

const sigdataactivitiesbyyear: ActivityResponceInterface = {
  ...apiPOSTModel(`${DS_API}/search/${endpoints.activity}/select/`),
};

export default sigdataactivitiesbyyear;
