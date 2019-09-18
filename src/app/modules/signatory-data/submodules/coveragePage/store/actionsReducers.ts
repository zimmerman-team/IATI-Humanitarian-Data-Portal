import { CoverageInterface } from './interfaces';
import { apiModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';

export const coverage: CoverageInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
