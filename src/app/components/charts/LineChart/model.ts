import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';

export type DataModel  = {
  x: any,
  y: any
}

export type LineChartDataModel = {
  id: string,
  data: DataModel[];
}

export type LineChartModel = {
  values: LineChartDataModel[];
  colors?: ColorSchemeType;
}


