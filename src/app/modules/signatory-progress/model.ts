import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export interface SignatoryProgressModel {
  loading: boolean;
  title: string;
  description: string;
  lineChartCardData: LineChartCardModel;
  horizontalBarChartCardData: HorizontalBarChartCardModel;
  tableChartData: TableModuleModel;
}
