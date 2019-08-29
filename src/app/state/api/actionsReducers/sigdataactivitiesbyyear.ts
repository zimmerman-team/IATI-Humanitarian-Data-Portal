import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiPOSTModel } from './index';
import { DS_API } from 'app/config';

const sigdataactivitiesbyyear: ActivityResponceInterface = {
  ...apiPOSTModel(`${DS_API}/search/activity/select/`),
};

export default sigdataactivitiesbyyear;
