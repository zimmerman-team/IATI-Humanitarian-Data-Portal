import { PublisherInterface } from './interface';
import { apiModel } from 'app/state/api/actionsReducers';

export const humPublishers: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export const publishers: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export const publishers202: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export const publishers203: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};

export const publishersTrac: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/activity/select/`),
};
