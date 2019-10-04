import { action } from 'easy-peasy';
import { DataTableOptions, SortModel } from 'app/state/general/interfaces';

export const dataTableOpts: DataTableOptions = {
  filterLists: [],
  sortCol: 'Publishing organisation',
  sortDir: 'asc',
  searchTerm: '',
  setSearch: action((state, payload: string) => {
    state.searchTerm = payload;
  }),
  setSort: action((state, payload: SortModel) => {
    state.sortCol = payload.sortCol;
    state.sortDir = payload.sortDir;
  }),
  setFilterLists: action((state, payload: string[][]) => {
    state.filterLists = payload;
  }),
};
