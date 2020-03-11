import React from 'react';

//https://github.com/plouc/nivo/issues/353
//Function is used for multiline text after

export const getTspanGroups = (
  value: string,
  maxLineLength: number,
  maxLines = 3
) => {
  const words = value.split(' ');

  type linesAcc = {
    lines: string[];
    currLine: string;
  };

  //reduces the words into lines of maxLineLength
  const assembleLines: linesAcc = words.reduce(
    (acc: linesAcc, word: string) => {
      //if the current line isn't empty and the word + current line is larger than the allowed line size, create a new line and update current line
      const shouldWrap: boolean =
        (word + acc.currLine).length > maxLineLength && acc.currLine !== '';
      if (shouldWrap) {
        return {
          lines: acc.lines.concat([acc.currLine]),
          currLine: word,
        };
      }
      //otherwise add the word to the current line
      return {
        ...acc,
        currLine: `${acc.currLine} ${word}`,
      };
    },
    { lines: [], currLine: '' }
  );

  //add the ending state of current line (the last line) to lines
  const allLines = assembleLines.lines.concat([assembleLines.currLine]);

  //for now, only take first 2 lines due to tick spacing and possible overflow
  const lines = allLines.slice(0, maxLines);
  const children: JSX.Element[] = [];
  let dy = 5;

  lines.forEach((lineText, i) => {
    if (lines.length > 1 && i === 0) {
      dy = -10;
    }
    children.push(
      <tspan x={0} dy={dy} key={i}>
        {// if on the second line, and that line's length is within 3 of the max length, add ellipsis
        i === 2 && allLines.length > 3
          ? `${lineText.slice(0, maxLineLength - 3)}...`
          : lineText}
      </tspan>
    );
    //increment dy to render next line text below
    if (lines.length > 1 && i === 0) {
      dy += 25;
    }
  });

  return children;
};

//Calculates the axis position by substracting a given number from the width of the bar.
//Expect when the width is smaller then the number to substract.
//This fixes a bug that the text is on the wrong side of the y-axis
export function calculateAxisPosition(
  width: number,
  nToSubtract: number
): number {
  let axisPosition: number;

  if (width < nToSubtract) {
    axisPosition = 0;
  } else {
    axisPosition = width - nToSubtract;
  }

  return axisPosition;
}
