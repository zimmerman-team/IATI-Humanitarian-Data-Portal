import { apiModel } from 'app/state/api/actionsReducers';
import { TimelagInterface } from './interfaces';
import { endpoints } from 'app/__consts__/endpoints';

export const timeLag: TimelagInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
