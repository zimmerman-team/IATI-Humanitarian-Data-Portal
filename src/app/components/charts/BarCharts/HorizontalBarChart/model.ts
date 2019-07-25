export type HorizontalBarChartValueModel = {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

export type HorizontalBarChartModel = {
  values: HorizontalBarChartValueModel[];
}
