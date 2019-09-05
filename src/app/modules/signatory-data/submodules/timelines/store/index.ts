import { createComponentStore } from 'easy-peasy';
import { TimelagInterface } from './interfaces';
import { timeLag } from './actionsReducers';

export interface TimelinessStoreModel {
  timeLag: TimelagInterface;
}

const timeliness: TimelinessStoreModel = {
  timeLag,
};

export const timeStore = createComponentStore(timeliness);
