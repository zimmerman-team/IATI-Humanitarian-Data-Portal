/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import theme from 'app/theme';
import 'styled-components/macro';

type Props = {
  facetOffset: number;
  nextEnabled: boolean;
  setFacetOffset: Function;
};

export const CustomFooter = (props: Props) => {
  return (
    <div
      css={`
        height: 50px;
        display: flex;
        padding: 0 20px;
        background: #fff;
        font-family: Inter;
        align-items: center;
        justify-content: flex-end;
      `}
    >
      <div
        css={`
          margin-right: 30px;
          opacity: ${props.facetOffset === 0 ? 0.6 : 1};
          pointer-events: ${props.facetOffset === 0 ? 'none' : 'all'};
          &:hover {
            cursor: pointer;
            color: ${theme.palette.primary.main};
          }
        `}
        role="button"
        onClick={() => props.setFacetOffset(prev => prev - 10)}
      >
        Back
      </div>
      <div
        css={`
          cursor: pointer;
          opacity: ${!props.nextEnabled ? 0.6 : 1};
          pointer-events: ${!props.nextEnabled ? 'none' : 'all'};
          &:hover {
            cursor: pointer;
            color: ${theme.palette.primary.main};
          }
        `}
        role="button"
        onClick={() => props.setFacetOffset(prev => prev + 10)}
      >
        Next
      </div>
    </div>
  );
};
