import { createComponentStore } from 'easy-peasy';
import { TimelagInterface } from 'app/modules/signatory-data/submodules/timelines/store/interfaces';
import { timeLag } from 'app/modules/signatory-data/submodules/timelines/store/actionsReducers';

export interface TimelinessStoreModel {
  timeLag: TimelagInterface;
}

const timeliness: TimelinessStoreModel = {
  timeLag,
};

export const timeStore = createComponentStore(timeliness);
