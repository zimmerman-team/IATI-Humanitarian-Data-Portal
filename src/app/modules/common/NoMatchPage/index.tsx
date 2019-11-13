import React from 'react';
import { Link } from 'react-router-dom';
import { DecoNotMatchTopLeft } from 'app/modules/common/NoMatchPage/common/decoration/DecoNotMatchTopLeft';
import { DecoNoMatchMidRight } from 'app/modules/common/NoMatchPage/common/decoration/DecoNoMatchMidRight';

//cc:refactor this component, inline css need to be moved to proper styled components
export const NoMatchPage = () => {
  return (
    <div
      css={`
        position: relative;
        width: 100%;
        height: 100%;
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={`
          position: absolute;
          top: -50px;
          left: 0;
        `}
      >
        <DecoNotMatchTopLeft />
      </div>

      <div
        css={`
          position: absolute;
          top: 200px;
          right: 0;
        `}
      >
        <DecoNoMatchMidRight />
      </div>
      <div
        css={`
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.71;
          letter-spacing: 0.1px;
          color: #525252;
        `}
      >
        Oops! Page not found
      </div>
      <div
        css={`
          font-family: Inter;
          font-size: 120px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: 2.15px;
          color: #525252;
        `}
      >
        404
      </div>
      <div
        css={`
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.71;
          letter-spacing: 1.25px;
          text-align: center;
          color: #525252;
          margin-bottom: 50px;
        `}
      >
        We are sorry, but the page you requested was not found
      </div>

      <Link to="/">
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 204px;
            height: 46px;
            border-radius: 2px;
            background-color: #25baa4;
          `}
        >
          <span
            css={`
              font-family: Inter;
              font-size: 16px;
              font-weight: 500;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.5;
              letter-spacing: 0.15px;
              color: white;
            `}
          >
            Back to Home Page
          </span>
        </div>
      </Link>
    </div>
  );
};
