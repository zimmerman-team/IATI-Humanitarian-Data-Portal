import { ColorSchemeType } from '../common/colorUtil';
import {BarSvgProps} from '@nivo/bar';

export type HorizontalBarChartValueModel = {
  name: string;
  value: number;
  percentage: number;
}

export type HorizontalBarChartModel = {
  values: HorizontalBarChartValueModel[];
  colors?: ColorSchemeType;
}

export const barModel: BarSvgProps = {
  data: [],
  keys: ['percentage'],
  indexBy: 'name',
  margin: { top: 32, right: 50, bottom: 0, left: 120 },
  padding: 0.4,
  layout: 'horizontal',
  axisTop: {
    tickValues: 5,
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: '',
    legendOffset: 36,
    format: v => `${v}%`
  },
  axisRight: null,
  axisBottom: null,
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: '',
    legendPosition: 'middle',
    legendOffset: -40,
  },
  labelSkipWidth: 9,
  labelSkipHeight: 17,
  legends: [],
  motionStiffness: 90,
  motionDamping: 15,
  colors: [],

  enableGridX: true,
  enableGridY: true,
  maxValue: 100,

  theme: {
    axis: {
      ticks: {
        text: {
          fontWeight: 500,
          fontFamily: "Inter",
          fontSize: 12,
        }
      }
    },
    legends: {
      text: {
        fontWeight: 500,
        fontFamily: "Inter",
        fontSize: 12,
      }
    }
  }
};