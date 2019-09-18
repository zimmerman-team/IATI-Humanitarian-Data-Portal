import { createComponentStore } from 'easy-peasy';
import { PublisherInterface } from './interface';
import {
  humPublishers,
  publishers202,
  publishersTrac,
  publishers203,
} from './actionsReducers';

export interface ApplicationStoreModel {
  humPublishers: PublisherInterface;
  publishers202: PublisherInterface;
  publishers203: PublisherInterface;
  publishersTrac: PublisherInterface;
}

const signProgress: ApplicationStoreModel = {
  humPublishers,
  publishers202,
  publishers203,
  publishersTrac,
};

export const signProgStore = createComponentStore(signProgress);
