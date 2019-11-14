import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { apiModel } from './index';
import { endpoints } from 'app/__consts__/endpoints';

export const sigdataoutgoing: ActivityResponceInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};

export const sigdataoutgoingdisbtrace: ActivityResponceInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};

export const sigdataoutgoingtransactions: ActivityResponceInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/`
  ),
};
