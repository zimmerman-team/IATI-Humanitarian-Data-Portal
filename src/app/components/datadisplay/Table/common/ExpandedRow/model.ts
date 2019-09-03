export interface ExpandedCell {
  value: string | number;
  link?: string;
  colSpan: number;
  type?: string;
}

export interface ExpendedRowModel {
  data: ExpandedCell[];
  rowIndex: number;
}
