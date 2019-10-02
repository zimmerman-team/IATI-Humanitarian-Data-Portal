import {
  ActMetadataInterface,
  ActResultsInterface,
  ActTransactionsInterface,
} from './interface';
import { apiModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';

export const actMetadata: ActMetadataInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/select/`
  ),
};

export const incTransactions: ActTransactionsInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const outTransactions: ActTransactionsInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.transaction}/select/`
  ),
};

export const actResults: ActResultsInterface = {
  ...apiModel(
    `${process.env.REACT_APP_DS_API}/search/${endpoints.result}/select/`
  ),
};
