import { HorizontalBarChartModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';

export type HorizontalBarChartCardModel = {
  title: string;
  tooltip?: string;
  data: HorizontalBarChartModel;
  colors?: ColorSchemeType;
};
