import {
  CoverageInterface,
  CovOrgInterface,
  TransDateInterface,
} from 'app/modules/signatory-data/submodules/coveragePage/store/interfaces';
import { apiModel, apiPOSTModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';

export const coverage: CoverageInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const covOrg: CovOrgInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.organisation}/select/`
  ),
};

export const transDate: TransDateInterface = {
  ...apiPOSTModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};
