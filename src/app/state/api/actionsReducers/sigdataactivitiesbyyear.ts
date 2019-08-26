import { ActivityResponceStringQueryInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';

const sigdataactivitiesbyyear: ActivityResponceStringQueryInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export default sigdataactivitiesbyyear;
