import React from 'react';
import { ResponsiveLine, LineProps, LineSvgProps } from '@nivo/line'
import styled from 'styled-components';
import { LineChartModel } from './model'
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';
// import { CustomSymbolShape } from '../common/CustomSymbolShape';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

//TODO: Discuss value skipping on x-axis.
// - It is possible to skip values => axisBottom => tickValues
// - It is not possible to "jump" from value to value, as in design. According to nivo docs.
//TODO: Discuss only showing first and last points in the line

const lineModel: LineProps | LineSvgProps | LineChartModel = {
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
      legendPosition: 'middle'
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
      format: v => `${v}%`
  },
  colors: [],
  lineWidth: 4,
  pointSize: 10,
  pointColor: { from: 'color', modifiers: [] },
  pointBorderWidth: 2,
  pointBorderColor: { from: 'serieColor' },
  pointLabel: "y",
  pointLabelYOffset: -12,
  enableSlices: "x",
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
        symbolSize: 12,
        symbolShape: 'circle',
        itemDirection: 'left-to-right',
        itemTextColor: '#777',
      }
      ],
  animate: false,
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
      },
      tooltip: {
        tableCell: {
          fontFamily: "Inter",
          fontSize: 12,
        }
      }
    }
};

// const BarComponent = props => {
//   return(
//     <g {...props}>
//       <rect {...props} fill="#5accbf" height={props.height / 2} />
//       <text {...props} x={props.width - 64} y={props.y - 5} fontFamily="Inter" fontSize="12px" lineHeight="1.33" letterSpacing="0.42" fontWeight="normal" fill={Colours.greydark20OrFontsecondary}>{props.data.data.percentage}% ({props.data.data.value})</text>
//     </g>
//   );
// };

const Linechart = styled(props => <ResponsiveLine {...props} />)`&&{}`;

//TODO: Chart container should adapt to the width of the card that it is in for responsiveness.
const ChartContainer = styled.div`
  height: 320px;
  width: 1000px
`;

export const LineChart = (props: LineChartModel) => {
  return(
    <ChartContainer>
      {/*<Linechart {...lineModel} data={data} colorScheme={props.colorScheme} />*/}
      <Linechart {...lineModel} data={props.values} colors={colorScheme(props.colors)}/>
    </ChartContainer>
  );
};
