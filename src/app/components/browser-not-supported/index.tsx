import React from 'react';
import { css } from 'styled-components/macro';
import { isIE } from 'react-device-detect';

export const BrowserNotSupported = () => {
  return (
    <div
      css={`
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 684px;
          height: 294px;
          background-color: #ffffff;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        `}
      >
        <div
          css={`
            font-family: Inter;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1.25397px;
            margin-bottom: 35px;
          `}
        >
          Unsupported browser
        </div>
        <div
          css={`
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 1.25397px;
          `}
        >
          <span
            css={`
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              line-height: 24px;
              color: rgba(1, 1, 10, 0.6);
            `}
          >
            We do not support Internet Explorer 11 version.
            <br /> Please upgrade to&nbsp;
            <a
              href="https://www.microsoft.com/edge"
              target="_blank"
              css={`
                text-decoration: none;
                color: #5accbf;
              `}
            >
              Microsoft Edge
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
