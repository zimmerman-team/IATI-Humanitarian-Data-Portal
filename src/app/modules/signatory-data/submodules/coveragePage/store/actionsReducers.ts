import { CoverageInterface } from './interfaces';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';

export const coverage: CoverageInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};
