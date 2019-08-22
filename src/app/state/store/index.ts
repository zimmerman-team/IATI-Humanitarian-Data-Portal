import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import activities from 'app/state/api/actionsReducers/activity';
import humanitarian from 'app/state/api/actionsReducers/humanitarian';
import gbsignatories from 'app/state/api/actionsReducers/gbsignatories';
import iatigbsignatories from 'app/state/api/actionsReducers/iatigbsignatories';
import ActivityResponceInterface from 'app/state/api/interfaces/activityInterface';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';

const persistSessionConfig = {
  key: 'session',
  storage: storageSession,
};

export interface ApplicationStoreModel {
  activities: ActivityResponceInterface;
  humanitarian: ActivityResponceInterface;
  gbsignatories: GBSignatoryResponseInterface;
  iatigbsignatories: ActivityResponceInterface;
}

const applicationStore: ApplicationStoreModel = {
  activities,
  humanitarian,
  gbsignatories,
  iatigbsignatories
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
