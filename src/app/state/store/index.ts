import { createStore } from 'easy-peasy';
import ActivityResponceInterface from '../api/interfaces/activityInterface';
import activities from '../api/actionsReducers/activity';

export interface ApplicationStoreModel {
  activities: ActivityResponceInterface;
}

const applicationStore: ApplicationStoreModel = {
  activities
};

const appStore = createStore(applicationStore);

export default appStore;
