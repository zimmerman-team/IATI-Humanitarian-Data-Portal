import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { HorizontalBarChartModel } from './model';
import styled from 'styled-components';
import colors from 'app/theme/color';
import Typography from '@material-ui/core/Typography';
import { Visibility } from '@material-ui/icons';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    layout="horizontal"
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 36 }}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    enableGridX={true}
    labelSkipWidth={9}
    labelSkipHeight={17}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    legends={[]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
