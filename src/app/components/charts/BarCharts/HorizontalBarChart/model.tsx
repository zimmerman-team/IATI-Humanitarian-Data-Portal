import React from 'react';
import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';

export type HorizontalBarChartValueModel = {
  name: string;
  value: number | null;
  percentage: number | null;
};

export type HorizontalBarChartModel = {
  values: HorizontalBarChartValueModel[];
  colors?: ColorSchemeType;
};
