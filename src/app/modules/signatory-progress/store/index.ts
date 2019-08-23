import { createComponentStore } from 'easy-peasy';
import { PublisherInterface } from './interface';
import { humPublishers, publishers } from './actionsReducers';

export interface ApplicationStoreModel {
  humPublishers: PublisherInterface;
  publishers: PublisherInterface;
}

const signProgress: ApplicationStoreModel = {
  humPublishers,
  publishers,
};

export const signProgStore = createComponentStore(signProgress);
