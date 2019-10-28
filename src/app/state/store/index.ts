import { createStore, action } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import activities from 'app/state/api/actionsReducers/activity';
import humanitarian from 'app/state/api/actionsReducers/humanitarian';
import gbsignatories from 'app/state/api/actionsReducers/gbsignatories';
import tooltips from 'app/state/api/actionsReducers/tooltips';
import signatoryProgress from 'app/state/api/actionsReducers/signatoryProgress';
import SignatoryPrgoressResponseInterface from 'app/state/api/interfaces/signatoryProgressInterface';
import {
  sigdataincoming,
  sigdataincomingfundtrace,
  sigdataincomingtransactions,
} from 'app/state/api/actionsReducers/sigdataincoming';
import {
  sigdataoutgoing,
  sigdataoutgoingdisbtrace,
  sigdataoutgoingtransactions,
} from 'app/state/api/actionsReducers/sigdataoutgoing';
import iatigbsignatories from 'app/state/api/actionsReducers/iatigbsignatories';
import sigdataoverviewhum from 'app/state/api/actionsReducers/sigdataoverviewhum';
import sigdataactivityyears from 'app/state/api/actionsReducers/sigdataactivityyears';
import sigdataactivitystatus from 'app/state/api/actionsReducers/sigdataactivitystatus';
import GBSignatoryResponseInterface from 'app/state/api/interfaces/gbsignatoryInterface';
import sigdataoverviewdataerrors from 'app/state/api/actionsReducers/sigdataoverviewdataerrors';
import sigdataactivitiesbyyear from 'app/state/api/actionsReducers/sigdataactivitiesbyyear';
import {
  ActivityResponceInterface,
  OrganisationNarrativeInterface,
} from 'app/state/api/interfaces/activityInterface';
import { CodeListInterface } from '../api/interfaces/codeListsInterface';
import { codelists } from '../api/actionsReducers/codeLists';
import organisationnarrative from 'app/state/api/actionsReducers/organisationNarrative';
import { SigDataActivityListFilterModel } from '../api/interfaces';
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
  tooltips: GBSignatoryResponseInterface;
  signatoryProgress: SignatoryPrgoressResponseInterface;
  iatigbsignatories: ActivityResponceInterface;
  sigdataoverviewhum: ActivityResponceInterface;
  sigdataactivityyears: ActivityResponceInterface;
  sigdataactivitystatus: ActivityResponceInterface;
  sigdataactivitiesbyyear: ActivityResponceInterface;
  sigdataincomingfundtrace: ActivityResponceInterface;
  sigdataincomingtransactions: ActivityResponceInterface;
  sigdataoutgoingdisbtrace: ActivityResponceInterface;
  sigdataoverviewdataerrors: ActivityResponceInterface;
  sigdataoutgoingtransactions: ActivityResponceInterface;
  codelists: CodeListInterface;
  organisationnarrative: OrganisationNarrativeInterface;

  sigDataOpts: DataTableOptions;
  sigDataActivityListFilter: SigDataActivityListFilterModel;
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
  organisationnarrative,
  sigdataoverviewdataerrors,
  tooltips,
  signatoryProgress,
  sigdataoutgoingtransactions,
  sigdataincomingtransactions,
  sigDataActivityListFilter: {
    activityListFilter: { label: '', value: '' },
    setActivityListFilter: action((state, payload) => {
      state.activityListFilter = payload;
    }),
  },
};

export const appStore = createStore(applicationStore, {
  reducerEnhancer: reducer => {
    return persistReducer(persistSessionConfig, reducer);
  },
});

export const persistor = persistStore(appStore);
