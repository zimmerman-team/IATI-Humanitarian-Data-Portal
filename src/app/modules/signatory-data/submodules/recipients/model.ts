import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export type RecipientsModel = {
  activity: ActivityModel;
  barChartData: HorizontalBarChartCardModel;
  tableData: TableModuleModel;
};

type ActivityModel = {
  name: string;
  code: string;
};
