import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export type ProvidersPageModel = {
  barChartData: HorizontalBarChartCardModel;
  tableData: TableModuleModel;
  loading: boolean;
};
