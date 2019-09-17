import React from 'react';

export const DecoAboutMidRight = props => (
  <svg width="299px" height="433px" viewBox="0 0 299 433" {...props}>
    <defs>
      <path
        d="M119.5 239.328c-65.998 0-119.5-53.502-119.5-119.5C0 53.83 53.502.328 119.5.328c65.998 0 119.5 53.502 119.5 119.5 0 65.998-53.502 119.5-119.5 119.5zm.5-21c54.676 0 99-44.324 99-99s-44.324-99-99-99-99 44.324-99 99 44.324 99 99 99z"
        id="a"
      />
      <path
        d="M74 148c-40.87 0-74-33.13-74-74S33.13 0 74 0s74 33.13 74 74-33.13 74-74 74zm0-17c31.48 0 57-25.52 57-57s-25.52-57-57-57-57 25.52-57 57 25.52 57 57 57z"
        id="c"
      />
    </defs>
    <g
      transform="translate(-998 -1126)"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(1 -40) translate(957 1132)">
        <path d="M0 0H375V503H0z" />
        <g strokeWidth={1} fillRule="evenodd" transform="translate(100 33.672)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use fill="#EBEBEB" fillRule="nonzero" xlinkHref="#a" />
          <path
            fill="#30C2B0"
            mask="url(#b)"
            d="M119.5 131.722656L177.824219 11.3808594 119.5 -19 -22.4824219 22.4667969 -26.8925781 206.263672 119.5 264.185547z"
          />
        </g>
        <g strokeWidth={1} fillRule="evenodd" transform="translate(40 319)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <use fill="#EBEBEB" fillRule="nonzero" xlinkHref="#c" />
          <path
            fill="#30C2B0"
            mask="url(#d)"
            d="M73.8174498 81.6742281L-7.26953125 105.550781 4.97379915e-13 -54.3242188 -14.2640748 13.771641 -17 128.001517 73.8174498 164z"
          />
        </g>
      </g>
    </g>
  </svg>
);
