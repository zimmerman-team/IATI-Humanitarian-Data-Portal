import React from 'react';
import { DotsSM } from 'app/components/svgs/BackgroundDots/DotsSM';
import { DotsMD } from 'app/components/svgs/BackgroundDots/DotsMD';
import { DotsLG } from 'app/components/svgs/BackgroundDots/DotsLG';
import { DotsXL } from 'app/components/svgs/BackgroundDots/DotsXL';

//Some pages make use of a XL dots asset in the bottom-left corner
//If a page has an XL dots asset, then only the top-left corner gets a random dots img.
type RandomDotsBackgroundprops = {
  hasXL: boolean;
};

function randomizeArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//function returns a array of react components.
function renderRandomDots(hasXL: boolean) {
  const backgrounds = [<DotsSM />, <DotsMD />, <DotsLG />];
  const randomizedBackgrounds = randomizeArray(backgrounds);

  if (hasXL) {
    React.cloneElement(randomizedBackgrounds[0], {
      position: 'top-left',
    });
    React.cloneElement(randomizedBackgrounds[1], { position: 'bottom-right' });
  } else {
    React.cloneElement(randomizedBackgrounds[0], { position: 'top-left' });
  }

  return backgrounds;
}

export function Background(props: RandomDotsBackgroundprops) {
  return (
    <>
      {renderRandomDots(props.hasXL)}
      {props.hasXL && <DotsXL position="bottom-right" />}
    </>
  );
}
