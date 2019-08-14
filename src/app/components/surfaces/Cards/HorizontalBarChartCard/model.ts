import { HorizontalBarChartModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';

export type HorizontalBarChartCardModel = {
  title: string;
  tooltip?: string;
  data: HorizontalBarChartModel;
};
