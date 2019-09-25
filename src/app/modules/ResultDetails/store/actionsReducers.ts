import { apiModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';
import { ResultsInterface } from './interface';

export const results: ResultsInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.result}/select/`
  ),
};
