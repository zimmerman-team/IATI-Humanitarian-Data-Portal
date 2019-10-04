import { Action } from 'easy-peasy';

export interface SortModel {
  sortCol: string;
  sortDir: string;
}

export interface DataTableOptions {
  filterLists: string[][];
  sortCol: string;
  sortDir: string;
  searchTerm: string;
  setSearch: Action<DataTableOptions, string>;
  setSort: Action<DataTableOptions, SortModel>;
  setFilterLists: Action<DataTableOptions, string[][]>;
}
