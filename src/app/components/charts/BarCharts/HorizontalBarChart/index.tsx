import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import { HorizontalBarChartModel } from './model';
import styled from 'styled-components';


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const barModel: BarSvgProps = {
  data: [],
  keys: ['percentage'],
  indexBy: 'name',
  margin: { top: 50, right: 130, bottom: 50, left: 100 },
  padding: 0.4,
  layout: 'horizontal',
  axisTop: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: '',
    legendOffset: 36,
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
};

const BarChart = styled(props => <ResponsiveBar {...props} />)`
svg > g > g{
color: black !important;
}
`;

const CustomRect = styled(props => <rect {...props} />)`
  height: 24px;
  fill: #5accbf;
`;

// const CustomBarComponent = () => {
//   return (
//     <CustomRect />
//   )
// };

// https://nivo.rocks/bar/
export const MyResponsiveBar = ({ data }) => {
  return <BarChart {...barModel} data={data} barComponent={CustomRect} />;
  // return <BarChart {...barModel} data={data} />;
};
