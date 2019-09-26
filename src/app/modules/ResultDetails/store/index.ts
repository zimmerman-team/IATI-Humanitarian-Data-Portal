import { createComponentStore } from 'easy-peasy';
import { ResultsInterface } from './interface';
import { results } from './actionsReducers';

export interface ComponentStoreModel {
  results: ResultsInterface;
}

const resultz: ComponentStoreModel = {
  results,
};

export const resStore = createComponentStore(resultz);
