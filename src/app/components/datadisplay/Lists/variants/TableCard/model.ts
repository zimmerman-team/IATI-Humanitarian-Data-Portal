import { ListCellModel } from '../../common/SimpleListItem/model';

export interface TableCardModel {
  fullWidth?: boolean;
  title: string;
  items?: ListCellModel[][];
  expandable?: boolean;
}
