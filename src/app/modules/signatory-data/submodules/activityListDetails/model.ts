import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';
import { InPageNavModel } from 'app/components/navigation/InPageNavigation/model';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export type ActivityListDetailModel = {
  header: ActivityDetailsHeaderCardModel;
  sections: SectionsModel[];
  incomingTransactionsTableData: TableModuleModel;
  outgoingTransactionsTableData: TableModuleModel;
  inPageNavigation: InPageNavModel;
  lists: ListModel[];
};

type SectionsModel = {
  title: string;
  content: string;
};
