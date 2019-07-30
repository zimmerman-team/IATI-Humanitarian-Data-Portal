import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import styled from 'styled-components';
import Colours from 'app/theme/color';


//TODO:
//  - Implement Colour prop for the BarComponent
//  - Implement 1-on-1 with design, or discuss with designer.
//  - Refactor to non responsive bar.....
//  - Get rid of all errors.

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
    fontFamily: "Inter",
    fontSize: 12,

    axis: {
      ticks:{
        text: {
          fontWeight: 500,
        }
      }

    }
  }
};

const BarChart = styled(props => <ResponsiveBar {...props} />)`
`;

const BarComponent = props => {
  console.log(props);
  return(
    <g {...props}>
      <rect {...props} fill="#5accbf" height={props.height / 2} />
      <text {...props} x={props.width - 64} y={props.y - 5} fontFamily="Inter" fontSize="12px" lineHeight="1.33" letterSpacing="0.42">{props.data.data.percentage}% ({props.data.data.value})</text>
    </g>
  );
};

// https://nivo.rocks/bar/
export const HorizontalBarChart = ({ data }) => {
  return(
    <div style={{height: '270px', width: '1000px'}}>
      <BarChart {...barModel} data={data} barComponent={BarComponent} />
    </div>
  );
};
