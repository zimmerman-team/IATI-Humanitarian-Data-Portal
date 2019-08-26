export type ListModel = {
  title?: string;
  subtitle?: string;
  valueHeaders?: boolean;
  items: ListItemModel[];
};

export type ListItemModel = {
  label: string;
  values: ListItemValueModel[];
  tooltip?: string;
};

export type ListItemValueModel = {
  qtc?: number | string;
  ptc?: number;
  date?: string;
  version?: string;
  highlight?: string;
};

//TODO: ListItemValueModel should be implemented different
//-value: oneOf qtc, ptc, date, version
//-highlight?: boolean
