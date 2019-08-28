import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';
import { DS_API } from 'app/config';

const sigdataactivitystatus: ActivityResponceInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export default sigdataactivitystatus;
