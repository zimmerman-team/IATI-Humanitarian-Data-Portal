import { TableModuleModel } from '../Table/model';
import { TableInfoItemModel } from './common/TableInfo/model';

export interface TableWTotalModel extends TableModuleModel {
  infoItems?: TableInfoItemModel[];
}
