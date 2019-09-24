/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ResponsiveBar, BarSvgProps } from '@nivo/bar';
import styled from 'styled-components';
import Colours from 'app/theme/color';
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';
import { HorizontalBarChartModel, barModel } from './model';

//TODO:
//  - Find a way to implement the colouring.
//  - Discuss with designer, implementation is not 1on1 with design

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarComponent = props => {
  const {
    borderRadius,
    borderWidth,
    enableLabel,
    labelSkipWidth,
    labelSkipHeight,
    showTooltip,
    hideTooltip,
    getTooltipLabel,
    tooltipFormat,
    shouldRenderLabel,
    labelColor,
    borderColor,
    ...fprops
  } = props;
  return (
    <g {...fprops}>
      <rect {...fprops} fill={props.color} height={props.height / 2} />
      <text
        x={props.width - 64}
        y={props.y - 5}
        fontFamily="Inter"
        fontSize="12px"
        // lineHeight="1.33"
        letterSpacing="0.42"
        fontWeight="normal"
        fill={Colours.greydark20OrFontsecondary}
      >
        {props.data.data.percentage}% ({props.data.data.value})
      </text>
    </g>
  );
};

const BarChart = styled(props => <ResponsiveBar {...props} />)`
  && {
  }
`;

const ChartContainer = styled.div`
  height: 400px;
`;

// https://nivo.rocks/bar/
export const HorizontalBarChart = (props: HorizontalBarChartModel) => {
  return (
    <ChartContainer>
      <BarChart
        {...barModel}
        colorBy="index"
        data={props.values}
        colors={colorScheme(props.colors)}
        barComponent={BarComponent}
      />
    </ChartContainer>
  );
};
