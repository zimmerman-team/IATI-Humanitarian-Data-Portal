import { createComponentStore } from 'easy-peasy';
import { PublisherInterface } from './interface';
import {
  humPublishers,
  publishers,
  publishers202,
  publishersTrac,
  publishers203,
} from './actionsReducers';

export interface ApplicationStoreModel {
  humPublishers: PublisherInterface;
  publishers: PublisherInterface;
  publishers202: PublisherInterface;
  publishers203: PublisherInterface;
  publishersTrac: PublisherInterface;
}

const signProgress: ApplicationStoreModel = {
  humPublishers,
  publishers,
  publishers202,
  publishers203,
  publishersTrac,
};

export const signProgStore = createComponentStore(signProgress);
