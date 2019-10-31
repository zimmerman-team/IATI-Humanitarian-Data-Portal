import { LineChartModel } from 'app/components/charts/LineChart/model';
import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';

export type LineChartCardModel = {
  title?: string;
  values: LineChartModel;
  colors?: ColorSchemeType;
};
