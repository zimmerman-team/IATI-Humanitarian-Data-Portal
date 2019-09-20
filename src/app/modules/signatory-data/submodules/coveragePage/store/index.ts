import { createComponentStore } from 'easy-peasy';
import { CoverageInterface, CovOrgInterface } from './interfaces';
import { coverage, covOrg } from './actionsReducers';

export interface CoverageStoreModel {
  coverage: CoverageInterface;
  covOrg: CovOrgInterface;
}

const coverageStore: CoverageStoreModel = {
  coverage,
  covOrg,
};

export const covStore = createComponentStore(coverageStore);
