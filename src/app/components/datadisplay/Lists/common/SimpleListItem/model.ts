export interface SimpleListItemModel {
  items: ListCellModel[];
  index: number;
}

export interface ListCellModel {
  heading?: boolean;
  value: string;
  link?: string;
  extLink?: boolean;
}
