import { ActivityResponceStringQueryInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';
import { DS_API } from 'app/config';

const sigdataactivitiesbyyear: ActivityResponceStringQueryInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export default sigdataactivitiesbyyear;
