import { createStore } from 'easy-peasy';
import ActivityResponceInterface from 'app/state/api/interfaces/activityInterface';
import activities from 'app/state/api/actionsReducers/activity';
import humanitarian from 'app/state/api/actionsReducers/humanitarian';
import gbsignatories from 'app/state/api/actionsReducers/gbsignatories';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';

export interface ApplicationStoreModel {
  activities: ActivityResponceInterface;
  humanitarian: ActivityResponceInterface;
  gbsignatories: GBSignatoryResponseInterface;
}

const applicationStore: ApplicationStoreModel = {
  activities,
  humanitarian,
  gbsignatories,
};

const appStore = createStore(applicationStore);

export default appStore;
