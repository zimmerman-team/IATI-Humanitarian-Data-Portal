export type BarChartValueModel = {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

export type BarChartModel = {
  values: BarChartValueModel[];
}
