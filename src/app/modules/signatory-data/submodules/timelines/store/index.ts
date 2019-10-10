import { createComponentStore } from 'easy-peasy';
import {
  FrequencyInterface,
  TimelagInterface,
} from 'app/modules/signatory-data/submodules/timelines/store/interfaces';
import {
  frequency,
  timeLag,
} from 'app/modules/signatory-data/submodules/timelines/store/actionsReducers';

export interface TimelinessStoreModel {
  timeLag: TimelagInterface;
  frequency: FrequencyInterface;
}

const timeliness: TimelinessStoreModel = {
  timeLag,
  frequency,
};

export const timeStore = createComponentStore(timeliness);
