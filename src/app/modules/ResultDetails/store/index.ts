import { createComponentStore } from 'easy-peasy';
import { ResultsInterface } from 'app/modules/ResultDetails/store/interface';
import { results } from 'app/modules/ResultDetails/store/actionsReducers';

export interface ComponentStoreModel {
  results: ResultsInterface;
}

const resultz: ComponentStoreModel = {
  results,
};

export const resStore = createComponentStore(resultz);
