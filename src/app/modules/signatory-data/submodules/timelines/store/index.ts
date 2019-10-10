import { createComponentStore } from 'easy-peasy';
import {
  FirstPublishInterface,
  FrequencyInterface,
  TimelagInterface,
} from 'app/modules/signatory-data/submodules/timelines/store/interfaces';
import {
  firstPubDate,
  frequency,
  timeLag,
} from 'app/modules/signatory-data/submodules/timelines/store/actionsReducers';

export interface TimelinessStoreModel {
  timeLag: TimelagInterface;
  frequency: FrequencyInterface;
  firstPubDate: FirstPublishInterface;
}

const timeliness: TimelinessStoreModel = {
  timeLag,
  frequency,
  firstPubDate,
};

export const timeStore = createComponentStore(timeliness);
