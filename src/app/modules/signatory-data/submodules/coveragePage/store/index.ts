import { createComponentStore } from 'easy-peasy';
import { CoverageInterface } from './interfaces';
import { coverage } from './actionsReducers';

export interface CoverageStoreModel {
  coverage: CoverageInterface;
}

const coverageStore: CoverageStoreModel = {
  coverage,
};

export const covStore = createComponentStore(coverageStore);
