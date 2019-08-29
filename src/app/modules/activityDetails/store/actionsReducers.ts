import { ActMetadataInterface, ActTransactionsInterface } from './interface';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';

export const actMetadata: ActMetadataInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const incTransactions: ActTransactionsInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};

export const outTransactions: ActTransactionsInterface = {
  ...apiModel(`${DS_API}/search/transaction/select/`),
};
