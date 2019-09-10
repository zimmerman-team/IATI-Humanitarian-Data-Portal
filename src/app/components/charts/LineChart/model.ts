import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';
import { LineProps, LineSvgProps } from '@nivo/line';

export type DataModel = {
  x: any;
  y: any;
};

export type LineChartDataModel = {
  id: string;
  data: DataModel[];
};

export type LineChartModel = {
  values: LineChartDataModel[];
  colors?: ColorSchemeType;
};

export const lineModel: LineProps | LineSvgProps | LineChartModel = {
  data: [],
  margin: { top: 10, right: 110, bottom: 100, left: 70 },
  xScale: { type: 'point' },
  yScale: { type: 'linear', stacked: false, min: 0, max: 100 },
  axisTop: null,
  axisRight: null,
  axisBottom: {
    // tickValues: ["31 June 2017", ],
    orient: 'bottom',
    tickSize: 0,
    tickPadding: 24,
    tickRotation: 0,
    legend: '',
    legendOffset: 36,
    legendPosition: 'middle',
  },
  axisLeft: {
    tickValues: [0, 25, 50, 75, 100],
    orient: 'left',
    tickSize: 15,
    tickPadding: 16,
    tickRotation: 0,
    legend: '',
    legendOffset: -40,
    legendPosition: 'middle',
    format: v => `${v}%`,
  },
  colors: [],
  lineWidth: 4,
  pointSize: 10,
  pointColor: { from: 'color', modifiers: [] },
  pointBorderWidth: 2,
  pointBorderColor: { from: 'serieColor' },
  pointLabel: 'y',
  pointLabelYOffset: -12,
  enableSlices: 'x',
  enableCrosshair: false,
  useMesh: true,
  //TODO: we should implement custom legend component, itemWidth prop is not dynamic
  legends: [
    {
      anchor: 'bottom-left',
      direction: 'row',
      justify: false,
      translateX: -32,
      translateY: 90,
      itemWidth: 200,
      itemHeight: 20,
      itemsSpacing: 10,
      symbolSize: 6,
      symbolShape: 'square',
      itemDirection: 'left-to-right',
      itemTextColor: '#777',
    },
  ],
  animate: false,
  theme: {
    axis: {
      ticks: {
        text: {
          fontWeight: 500,
          fontFamily: 'Inter',
          fontSize: 12,
        },
      },
    },
    legends: {
      text: {
        fontWeight: 500,
        fontFamily: 'Inter',
        fontSize: 12,
      },
    },
    tooltip: {
      tableCell: {
        fontFamily: 'Inter',
        fontSize: 12,
      },
    },
  },
};
