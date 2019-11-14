import { apiModel } from 'app/state/api/actionsReducers';
import { endpoints } from 'app/__consts__/endpoints';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';

export const countFilters: ActivityResponceInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};
