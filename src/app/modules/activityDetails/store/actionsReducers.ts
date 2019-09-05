import {
  ActMetadataInterface,
  ActResultsInterface,
  ActTransactionsInterface,
} from './interface';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';
import { endpoints } from 'app/__consts__/endpoints';

export const actMetadata: ActMetadataInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.activity}/select/`),
};

export const incTransactions: ActTransactionsInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.transaction}/select/`),
};

export const outTransactions: ActTransactionsInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.transaction}/select/`),
};

export const actResults: ActResultsInterface = {
  ...apiModel(`${DS_API}/search/${endpoints.result}/select/`),
};
