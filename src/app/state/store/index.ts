import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import activities from 'app/state/api/actionsReducers/activity';
import humanitarian from 'app/state/api/actionsReducers/humanitarian';
import gbsignatories from 'app/state/api/actionsReducers/gbsignatories';
import {
  sigdataincoming,
  sigdataincomingfundtrace,
} from 'app/state/api/actionsReducers/sigdataincoming';
import {
  sigdataoutgoing,
  sigdataoutgoingdisbtrace,
} from 'app/state/api/actionsReducers/sigdataoutgoing';
import {
  orgtypecodelist,
  sigdataproviderstypes,
} from 'app/state/api/actionsReducers/sigdataproviders';
import iatigbsignatories from 'app/state/api/actionsReducers/iatigbsignatories';
import sigdataoverviewhum from 'app/state/api/actionsReducers/sigdataoverviewhum';
import sigdataactivityyears from 'app/state/api/actionsReducers/sigdataactivityyears';
import sigdataactivitystatus from 'app/state/api/actionsReducers/sigdataactivitystatus';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import sigdataactivitiesbyyear from 'app/state/api/actionsReducers/sigdataactivitiesbyyear';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';

const persistSessionConfig = {
  key: 'session',
  storage: storageSession,
};

export interface ApplicationStoreModel {
  activities: ActivityResponceInterface;
  humanitarian: ActivityResponceInterface;
  sigdataincoming: ActivityResponceInterface;
  sigdataoutgoing: ActivityResponceInterface;
  orgtypecodelist: ActivityResponceInterface;
  gbsignatories: GBSignatoryResponseInterface;
  iatigbsignatories: ActivityResponceInterface;
  sigdataoverviewhum: ActivityResponceInterface;
  sigdataactivityyears: ActivityResponceInterface;
  sigdataactivitystatus: ActivityResponceInterface;
  sigdataproviderstypes: ActivityResponceInterface;
  sigdataactivitiesbyyear: ActivityResponceInterface;
  sigdataincomingfundtrace: ActivityResponceInterface;
  sigdataoutgoingdisbtrace: ActivityResponceInterface;
}

const applicationStore: ApplicationStoreModel = {
  activities,
  humanitarian,
  gbsignatories,
  orgtypecodelist,
  sigdataincoming,
  sigdataoutgoing,
  iatigbsignatories,
  sigdataoverviewhum,
  sigdataactivityyears,
  sigdataactivitystatus,
  sigdataproviderstypes,
  sigdataactivitiesbyyear,
  sigdataincomingfundtrace,
  sigdataoutgoingdisbtrace,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
