import { createComponentStore } from 'easy-peasy';
import {
  CoverageInterface,
  CovOrgInterface,
  TransDateInterface,
} from './interfaces';
import { coverage, covOrg, transDate } from './actionsReducers';

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
