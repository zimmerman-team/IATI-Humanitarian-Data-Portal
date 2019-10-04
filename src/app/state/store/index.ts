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
import iatigbsignatories from 'app/state/api/actionsReducers/iatigbsignatories';
import sigdataoverviewhum from 'app/state/api/actionsReducers/sigdataoverviewhum';
import sigdataactivityyears from 'app/state/api/actionsReducers/sigdataactivityyears';
import sigdataactivitystatus from 'app/state/api/actionsReducers/sigdataactivitystatus';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import sigdataoverviewdataerrors from 'app/state/api/actionsReducers/sigdataoverviewdataerrors';
import sigdataactivitiesbyyear from 'app/state/api/actionsReducers/sigdataactivitiesbyyear';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { CodeListInterface } from '../api/interfaces/codeListsInterface';
import { codelists } from '../api/actionsReducers/codeLists';
import { DataTableOptions } from 'app/state/general/interfaces';
import { dataTableOpts } from 'app/state/general/actionsReducers';

const persistSessionConfig = {
  key: 'session',
  storage: storageSession,
};

export interface ApplicationStoreModel {
  activities: ActivityResponceInterface;
  humanitarian: ActivityResponceInterface;
  sigdataincoming: ActivityResponceInterface;
  sigdataoutgoing: ActivityResponceInterface;
  gbsignatories: GBSignatoryResponseInterface;
  iatigbsignatories: ActivityResponceInterface;
  sigdataoverviewhum: ActivityResponceInterface;
  sigdataactivityyears: ActivityResponceInterface;
  sigdataactivitystatus: ActivityResponceInterface;
  sigdataactivitiesbyyear: ActivityResponceInterface;
  sigdataincomingfundtrace: ActivityResponceInterface;
  sigdataoutgoingdisbtrace: ActivityResponceInterface;
  sigdataoverviewdataerrors: ActivityResponceInterface;
  codelists: CodeListInterface;
  sigDataOpts: DataTableOptions;
}

const applicationStore: ApplicationStoreModel = {
  sigDataOpts: dataTableOpts,
  codelists,
  activities,
  humanitarian,
  gbsignatories,
  sigdataincoming,
  sigdataoutgoing,
  iatigbsignatories,
  sigdataoverviewhum,
  sigdataactivityyears,
  sigdataactivitystatus,
  sigdataactivitiesbyyear,
  sigdataincomingfundtrace,
  sigdataoutgoingdisbtrace,
  sigdataoverviewdataerrors,
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
