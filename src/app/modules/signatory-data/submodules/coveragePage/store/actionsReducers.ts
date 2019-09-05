import { CoverageInterface } from './interfaces';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';
import { endpoints } from 'app/__consts__/endpoints';

export const coverage: CoverageInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.transaction}/select/`),
};
