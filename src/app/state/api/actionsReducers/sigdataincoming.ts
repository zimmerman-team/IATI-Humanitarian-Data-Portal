import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';

const sigdataincoming: ActivityResponceInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export default sigdataincoming;
