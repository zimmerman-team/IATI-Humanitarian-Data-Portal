import React from 'react';
import 'styled-components/macro';

export const ToolTipIcon = props => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      css={`
        transform: translateY(4px);
      `}
      d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm.667 10H7.333v-4h1.334v4zm0-5.333H7.333V4.667h1.334V6z"
      fill="#A1A3A6"
    />
  </svg>
);
