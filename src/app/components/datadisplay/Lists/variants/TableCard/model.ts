import { ListCellModel } from '../../common/SimpleListItem/model';

export interface TableCardModel {
  title: string;
  items?: ListCellModel[][];
  expandable?: boolean;
}
