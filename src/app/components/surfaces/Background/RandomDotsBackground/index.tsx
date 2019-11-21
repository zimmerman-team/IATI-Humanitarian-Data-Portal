import React, { FunctionComponentElement } from 'react';
import { DotsSM } from 'app/components/svgs/BackgroundDots/DotsSM';
import { DotsMD } from 'app/components/svgs/BackgroundDots/DotsMD';
import { DotsLG } from 'app/components/svgs/BackgroundDots/DotsLG';
import { DotsXL } from 'app/components/svgs/BackgroundDots/DotsXL';

//Some pages make use of a XL dots asset in the bottom-left corner
//If a page has an XL dots asset, then only the top-left corner gets a random dots img.
type RandomDotsBackgroundprops = {
  hasXL: boolean;
  children: any;
};

function randomizeArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

//function returns a array of react components.
function renderRandomDots(hasXL: boolean) {
  const dotsComponents = [<DotsSM />, <DotsMD />, <DotsLG />];
  const randomizedDotsComponents = randomizeArray(dotsComponents);
  // tslint:disable-next-line: prefer-array-literal
  const randomizedBackground: Array<
    FunctionComponentElement<{ position: string }>
  > = [];

  if (hasXL) {
    randomizedBackground.push(
      React.cloneElement(randomizedDotsComponents[0], { position: 'top-left' })
    );
  } else {
    randomizedBackground.push(
      React.cloneElement(randomizedDotsComponents[0], { position: 'top-left' }),
      React.cloneElement(randomizedDotsComponents[1], {
        position: 'bottom-right',
      })
    );
  }
  console.log(randomizedBackground);
  return randomizedBackground;
}

export function Background(props: RandomDotsBackgroundprops) {
  return (
    <>
      {renderRandomDots(props.hasXL)}
      {props.hasXL && <DotsXL position="bottom-right" />}
      {props.children}
    </>
  );
}
