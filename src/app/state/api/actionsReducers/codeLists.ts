import { apiModel } from './index';
import { StatusListApiInterface } from '../interfaces/codeListsInterface';

export const actStatus: StatusListApiInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/api/codelists/ActivityStatus/?format=json`
  ),
};
