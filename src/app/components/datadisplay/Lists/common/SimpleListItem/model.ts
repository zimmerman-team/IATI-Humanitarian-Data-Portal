export interface SimpleListItemModel {
  items: ListCellModel[];
  index: number;
}

export interface ListCellModel {
  value: string;
  link?: string;
}
