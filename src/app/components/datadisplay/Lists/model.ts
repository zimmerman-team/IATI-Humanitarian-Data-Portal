import { ListCellModel } from './common/SimpleListItem/model';

export type ListModel = {
  title?: string;
  subtitle?: string;
  valueHeaders?: boolean;
  elName: string;
  type?: 'Card' | 'TableCard' | 'ExpTableCard';
  items?: ListItemModel[];
  tableCItems?: ListCellModel[][];
};

export type ListItemModel = {
  label: string;
  values: ListItemValueModel[];
  tooltip?: string;
};

export type ListItemValueModel = {
  qtc?: number | string;
  ptc?: number | string;
  date?: string;
  version?: string;
  highlight?: string;
};

//TODO: ListItemValueModel should be implemented different
//-value: oneOf qtc, ptc, date, version
//-highlight?: boolean
