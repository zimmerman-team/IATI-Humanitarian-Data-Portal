import React from 'react';
import styled from 'styled-components';
import { DotsSM } from 'app/components/svgs/BackgroundDots/DotsSM';
import { DotsMD } from 'app/components/svgs/BackgroundDots/DotsMD';
import { DotsLG } from 'app/components/svgs/BackgroundDots/DotsLG';
import { DotsXL } from 'app/components/svgs/BackgroundDots/DotsXL';

//Some pages make use of a XL dots asset in the bottom-left corner
//If a page has an XL dots asset, then only the top-left corner gets a random dots img.
type RandomDotsBackgroundprops = {
  hasXL: boolean;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderRandomDots(hasXL: boolean) {
  const backgrounds = [<DotsSM />, <DotsMD />, <DotsLG />];

  if (hasXL) {
    backgrounds.splice(getRandomInt(backgrounds.length), 1);
    backgrounds.splice(getRandomInt(backgrounds.length), 1);
  } else {
    backgrounds.splice(getRandomInt(backgrounds.length), 1);
  }

  return backgrounds;
}

export function Background(props: RandomDotsBackgroundprops) {
  return (
    <>
      {renderRandomDots(props.hasXL)}
      {props.hasXL && <DotsXL />}
    </>
  );
}
