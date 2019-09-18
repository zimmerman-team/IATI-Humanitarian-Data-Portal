import { apiModel } from 'app/state/api/actionsReducers';
import { TimelagInterface } from './interfaces';

export const timeLag: TimelagInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/transaction/select/`),
};
