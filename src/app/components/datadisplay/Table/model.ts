import { MUIDataTableOptions, MUIDataTableColumnDef } from 'mui-datatables';
import { TableInfoItemModel } from 'app/components/datadisplay/TableWTotal/common/TableInfo/model';

export interface TotalRowColModel {
  percValue?: number | string;
  dataType: 'money' | 'percentage' | 'count' | 'none';
}

export type moneyType = {
  num: number;
  currency: string;
};

export interface TableModuleModel {
  title: string | React.ReactNode;
  data: (
    | number
    | string
    | undefined
    | null
    | (string | number | null)[]
    | moneyType)[][];
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
  columnsCell?: string[];
  totalCell?: boolean | undefined;
  expandableData?: any[][][] | undefined;
  totalRowColsDef?: TotalRowColModel[];
  changeTableRowColor?: number;
  infoItems?: TableInfoItemModel[];
}

export interface TableLayoutModel {
  title: string | React.ReactNode;
  data: any[][];
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
  changeTableRowColor?: number;
}

export interface InfoCellModuleModel {
  value: string | string[];
  info: string | null;
  colSpan?: number;
}

export interface LinkCellModuleModel {
  value: string | string[] | number;
  link: string;
  extLink?: boolean;
  colSpan?: number;
}

export interface IconCellModuleModel {
  value: string | string[];
  colSpan?: number;
}

export interface MultiValuesCellModuleModel {
  value: string[];
  colSpan?: number;
}

export interface LocalTableStateModel {
  page: number;
  prevAction: string;
  rowsPerPage: number;
}
