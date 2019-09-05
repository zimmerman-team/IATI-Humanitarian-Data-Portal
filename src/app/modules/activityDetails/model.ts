import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';
import { InPageNavModel } from 'app/components/navigation/InPageNavigation/model';
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { TableCardModel } from '../../components/datadisplay/Lists/variants/TableCard/model';

export type ActivityDetailModel = {
  header: ActivityDetailsHeaderCardModel;
  sections: SectionsModel[];
  incomingTransactionsTableData: TableModuleModel;
  outgoingTransactionsTableData: TableModuleModel;
  inPageNavigation: InPageNavModel;
  lists: ListModel[];
  tableCard?: TableCardModel;
};

export type SectionsModel = {
  title: string;
  content: string;
};
