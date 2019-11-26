import { createComponentStore } from 'easy-peasy';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import { PublisherInterface } from 'app/modules/signatory-progress/store/interface';
import {
  humPublishers,
  use202OrLater,
  publishers202,
  publishersTrac,
  publishers203,
  cctriCMS,
} from 'app/modules/signatory-progress/store/actionsReducers';

export interface ApplicationStoreModel {
  humPublishers: PublisherInterface;
  use202OrLater: PublisherInterface;
  publishers202: PublisherInterface;
  publishers203: PublisherInterface;
  publishersTrac: PublisherInterface;
  cctriCMS: GBSignatoryResponseInterface;
}

const signProgress: ApplicationStoreModel = {
  humPublishers,
  use202OrLater,
  publishers202,
  publishers203,
  publishersTrac,
  cctriCMS,
};

export const signProgStore = createComponentStore(signProgress);
