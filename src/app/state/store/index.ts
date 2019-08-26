import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import activities from 'app/state/api/actionsReducers/activity';
import humanitarian from 'app/state/api/actionsReducers/humanitarian';
import gbsignatories from 'app/state/api/actionsReducers/gbsignatories';
import iatigbsignatories from 'app/state/api/actionsReducers/iatigbsignatories';
import sigdataoverviewhum from 'app/state/api/actionsReducers/sigdataoverviewhum';
import sigdataactivityyears from 'app/state/api/actionsReducers/sigdataactivityyears';
import sigdataactivitystatus from 'app/state/api/actionsReducers/sigdataactivitystatus';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import sigdataactivitiesbyyear from 'app/state/api/actionsReducers/sigdataactivitiesbyyear';
import {
  ActivityResponceInterface,
  ActivityResponceStringQueryInterface,
  ActivityResponceStringArrayQueryInterface,
} from 'app/state/api/interfaces/activityInterface';

const persistSessionConfig = {
  key: 'session',
  storage: storageSession,
};

export interface ApplicationStoreModel {
  activities: ActivityResponceInterface;
  humanitarian: ActivityResponceInterface;
  gbsignatories: GBSignatoryResponseInterface;
  iatigbsignatories: ActivityResponceInterface;
  sigdataoverviewhum: ActivityResponceInterface;
  sigdataactivityyears: ActivityResponceInterface;
  sigdataactivitystatus: ActivityResponceInterface;
  sigdataactivitiesbyyear: ActivityResponceStringQueryInterface;
}

const applicationStore: ApplicationStoreModel = {
  activities,
  humanitarian,
  gbsignatories,
  iatigbsignatories,
  sigdataoverviewhum,
  sigdataactivityyears,
  sigdataactivitystatus,
  sigdataactivitiesbyyear,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
