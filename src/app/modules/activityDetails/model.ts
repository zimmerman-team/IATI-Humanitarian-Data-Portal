import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { TableCardModel } from 'app/components/datadisplay/Lists/variants/TableCard/model';

export type ActivityDetailModel = {
  header: ActivityDetailsHeaderCardModel;
  sections: SectionsModel[];
  incomingTransactionsTableData: TableModuleModel;
  outgoingTransactionsTableData: TableModuleModel;
  lists: ListModel[];
  tableCard?: TableCardModel;
};

export type SectionsModel = {
  title: string;
  content: string;
};
