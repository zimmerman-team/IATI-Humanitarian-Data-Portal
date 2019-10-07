import { createComponentStore } from 'easy-peasy';
import { ActivityResponceInterface } from 'app/state/api/interfaces/activityInterface';
import { countFilters } from 'app/modules/signatory-data/submodules/activityList/store/actionsReducers';

export interface ComponentStoreModel {
  countFilters: ActivityResponceInterface;
}

const countries: ComponentStoreModel = {
  countFilters,
};

export const countFilterz = createComponentStore(countries);
