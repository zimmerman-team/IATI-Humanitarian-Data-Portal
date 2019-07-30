import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import styled from 'styled-components';
import { ChartTooltip } from '../common/index';
import Colours from 'app/theme/color';


//TODO:
//  - Find a better solution to handle colours

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const barModel: BarSvgProps = {
  data: [],
  keys: ['humanitarianActivities', 'activities'],
  indexBy: "year",
  margin:{ top: 0, right: 130, bottom: 50, left: 60 },
  padding: 0.5,
  colors:({ id, data }) => data[`${id}Color`],
  axisRight: null,
  axisBottom: {
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32
  },
  axisLeft:{
      tickValues: 3,
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -40
  },
  enableLabel: false,
  labelSkipWidth: 12,
  labelSkipHeight: 12,
  labelTextColor: { from: 'color', modifiers: [ [ 'darker', 1.6 ] ] },
  legends:[
    {
      dataFrom: 'keys',
      anchor: 'bottom-left',
      direction: 'row',
      justify: false,
      translateX: -25,
      translateY: 59,
      itemsSpacing: 0,
      itemWidth: 180,
      itemHeight: 40,
      itemDirection: 'left-to-right',
      symbolSize: 10,
    }
    ],
  tooltip: function(){},
  animate: false,
  motionStiffness: 90,
  motionDamping: 15,

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


// https://nivo.rocks/bar/
export const VerticalBarChart = ({ data }) => {
  return(
    <div style={{height: '320px', width: '1000px'}}>
      {/*<BarChart {...barModel} data={data} barComponent={ChartTooltip}/>*/}
      <BarChart {...barModel} data={data} />
    </div>
  );
};
