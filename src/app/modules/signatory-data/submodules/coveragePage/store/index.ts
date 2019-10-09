import { createComponentStore } from 'easy-peasy';
import {
  CoverageInterface,
  CovOrgInterface,
  TransDateInterface,
} from 'app/modules/signatory-data/submodules/coveragePage/store/interfaces';
import { coverage, covOrg, transDate } from 'app/modules/signatory-data/submodules/coveragePage/store/actionsReducers';

export interface CoverageStoreModel {
  coverage: CoverageInterface;
  covOrg: CovOrgInterface;
  transDate: TransDateInterface;
}

const coverageStore: CoverageStoreModel = {
  coverage,
  covOrg,
  transDate,
};

export const covStore = createComponentStore(coverageStore);
