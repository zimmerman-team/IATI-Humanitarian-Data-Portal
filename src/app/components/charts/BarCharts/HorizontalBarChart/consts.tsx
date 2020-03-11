import React from 'react';
import colors from 'app/theme/color';
import { getTspanGroups } from './utils';

export const barModel: any = {
  data: [],
  keys: ['percentage'],
  indexBy: 'name',
  margin: { top: 0, right: 0, bottom: 0, left: 140 },
  padding: 0.4,
  layout: 'horizontal',
  axisTop: {
    tickValues: 5,
    tickSize: 15,
    tickPadding: 10,
    tickRotation: 0,
    legend: '',
    legendOffset: 36,
    format: v => `${v}%`,
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
    renderTick: function Tick({ textX, value, x, y }) {
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            style={{
              fontWeight: 500,
              fontFamily: 'Inter',
              fontSize: 12,
              dominantBaseline: 'auto',
            }}
            x="-16%"
            textAnchor="start"
            transform="translate(-140, -10)"
          >
            {getTspanGroups(value, 18)}
          </text>
          <line
            x1="0"
            x2="-140"
            y1="0"
            y2="0"
            style={{
              stroke: colors.greylight30OrFontdisablet,
              strokeWidth: 1,
            }}
          />
        </g>
      );
    },
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
          fontFamily: 'Inter',
          fontSize: 12,
          dominantBaseline: 'auto',
        },
        line: {
          strokeWidth: 0,
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
  },
};
