import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import styled from 'styled-components';
import { ChartTooltip } from 'app/components/charts/BarCharts/common/ChartTooltip';

//TODO:
//  - Make this component way more generic
//  - Find a better solution to handle colours
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
  //TODO: this logic should be refactored to a more generic solution.
  //As of Visual Design this is not nescesarry for now.
  tooltip: function createChartTooltip({ data }){
    const items = [
      {
        label: "All activities", //Object.keys(data)[0]
        value: data.activities ? data.activities : "No data" ,
        color: data.activitiesColor
      },
      {
        label: "Humanitarian", //Object.keys(data)[3]
        value: data.humanitarianActivities ? data.humanitarianActivities : "No data" ,
        color: data.humanitarianActivitiesColor
      }
    ];

    return (
      <ChartTooltip items={items}/>
    )
  },
  animate: false,
  motionStiffness: 90,
  motionDamping: 15,

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

const BarChart = styled(props => <ResponsiveBar {...props} />)`&&{}`;

const ChartContainer = styled.div`
  height: 320px;
`;

// https://nivo.rocks/bar/
export const VerticalBarChart = ({ data }) => {
  return(
    // make sure parent container have a defined height when using ResposinveBar
    <ChartContainer>
      <BarChart {...barModel} data={data} />
    </ChartContainer>
  );
};
