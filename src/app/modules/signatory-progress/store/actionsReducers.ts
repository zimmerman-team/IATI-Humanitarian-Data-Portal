import { PublisherInterface } from 'app/modules/signatory-progress/store/interface';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import { endpoints } from 'app/__consts__/endpoints';
import { apiModel, spaceCloudAPIModel } from 'app/state/api/actionsReducers';

export const humPublishers: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};

export const publishers202: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};

export const publishers203: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};

export const publishersTrac: PublisherInterface = {
  ...apiModel(`${process.env.REACT_APP_DS_API}/search/${endpoints.activity}/`),
};

export const cctriCMS: GBSignatoryResponseInterface = {
  ...spaceCloudAPIModel('cctri'),
};
