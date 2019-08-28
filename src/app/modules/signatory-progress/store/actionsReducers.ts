import { PublisherInterface } from './interface';
import { apiModel } from 'app/state/api/actionsReducers';
import { DS_API } from 'app/config';

export const humPublishers: PublisherInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const publishers: PublisherInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const publishers202: PublisherInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const publishers203: PublisherInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};

export const publishersTrac: PublisherInterface = {
  ...apiModel(`${DS_API}/search/activity/select/`),
};
