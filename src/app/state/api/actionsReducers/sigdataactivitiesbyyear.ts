import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiPOSTModel } from './index';
import { endpoints } from 'app/__consts__/endpoints';

const sigdataactivitiesbyyear: ActivityResponceInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`
  ),
};

export default sigdataactivitiesbyyear;
