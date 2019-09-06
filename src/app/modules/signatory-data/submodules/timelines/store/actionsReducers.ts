import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';
import { TimelagInterface } from './interfaces';

export const timeLag: TimelagInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};
