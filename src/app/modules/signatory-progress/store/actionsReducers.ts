import { PublisherInterface } from './interface';
import { apiModel } from 'app/state/api/actionsReducers';

export const humPublishers: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export const publishers: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};
