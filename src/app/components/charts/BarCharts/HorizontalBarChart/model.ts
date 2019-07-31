import { ColorSchemeType } from '../common/colorUtil';

export type HorizontalBarChartValueModel = {
  name: string;
  value: number;
  percentage: number;
}

export type HorizontalBarChartModel = {
  values: HorizontalBarChartValueModel[];
  colors?: ColorSchemeType;
}
