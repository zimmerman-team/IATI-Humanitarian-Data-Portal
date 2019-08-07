import { MUIDataTableOptions, MUIDataTableColumnDef } from 'mui-datatables';

export type TotalRowColModel = {
  percValue?: number | string;
  dataType: 'money' | 'percentage' | 'count' | 'none';
};

export type TableModuleModel = {
  title: string;
  data: Array<Array<any>>;
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
  columnsCell: Array<string>;
  totalCell?: boolean | undefined;
  expandableData?: Array<Array<Array<any>>> | undefined;
  totalRowColsDef?: TotalRowColModel[];
};

export type TableLayoutModel = {
  title: string;
  data: Array<Array<any>>;
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
};

export type InfoCellModuleModel = {
  value: string | Array<string>;
  info: string;
  colSpan?: number;
};

export type LinkCellModuleModel = {
  value: string | Array<string>;
  link: string;
  colSpan?: number;
};

export type IconCellModuleModel = {
  value: string | Array<string>;
  colSpan?: number;
};

export type MultiValuesCellModuleModel = {
  value: Array<string>;
  colSpan?: number;
};

export type LocalTableStateModel = {
  page: number;
  prevAction: string;
  rowsPerPage: number;
};
