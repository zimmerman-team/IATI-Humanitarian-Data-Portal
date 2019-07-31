import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import styled from 'styled-components';
import Colours from 'app/theme/color';
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';

//TODO:
//  - Find a way to implement the colouring.
//  - Discuss with designer, implementation is not 1on1 with design

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const barModel: BarSvgProps = {
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

const BarComponent = props => {
  return(
    <g {...props}>
      <rect {...props} fill="#5accbf" height={props.height / 2} />
      <text {...props} x={props.width - 64} y={props.y - 5} fontFamily="Inter" fontSize="12px" lineHeight="1.33" letterSpacing="0.42" fontWeight="normal" fill={Colours.greydark20OrFontsecondary}>{props.data.data.percentage}% ({props.data.data.value})</text>
    </g>
  );
};

const BarChart = styled(props => <ResponsiveBar {...props} />)`&&{}`;

//TODO: Chart container should adapt to the width of the card that it is in for responsiveness.
const ChartContainer = styled.div`
  height: 270px;
  width: 1000px
`;

// https://nivo.rocks/bar/
export const HorizontalBarChart = ({ data }) => {
  return(
    <ChartContainer>
      <BarChart {...barModel} data={data} barComponent={BarComponent} />
    </ChartContainer>
  );
};
