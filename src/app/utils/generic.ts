/* utils */
import find from 'lodash/find';

/* consts */
import { shortMonthNames } from 'app/__consts__/dates';

// util function made for
// solr responses to get
// english text narratives from JSONString
// variables, which do contain
// the 'lang' variable
export function getEngText(jsonStrTitle: string) {
  const engTxt = JSON.parse(jsonStrTitle);
  const engFound = find(engTxt, ['lang', 'en']);
  if (engFound) {
    return engFound.narrative;
  }

  if (engTxt[0] && engTxt[0].narrative) {
    return engTxt[0].narrative;
  }

  return 'Not Found';
}

interface ActualDateInterface {
  actualStart: string;
  actualEnd: string;
}

// util function to get actual start
// and end dates according to the iati standard
// http://reference.iatistandard.org/203/codelists/ActivityDateType/
// when provided with date and date type arrays
// where the indexes correspond to each other.
// The actual start date is of type code 2
// and the actual end is of type code 4
// ALSO this formats the dates
export function getActualDates(
  dates: string[],
  dateTypes: string[]
): ActualDateInterface {
  let actualStart = '';
  let actualEnd = '';

  const actualStartIndex = dateTypes.indexOf('2');
  const actualEndIndex = dateTypes.indexOf('4');
  if (actualStartIndex !== -1) {
    // and here we format the date
    const tempDate = new Date(dates[actualStartIndex]);
    actualStart = `${tempDate.getDate()} ${
      shortMonthNames[tempDate.getMonth()]
    } ${tempDate.getFullYear()}`;
  }
  if (actualEndIndex !== -1) {
    // and here we format the date
    const tempDate = new Date(dates[actualEndIndex]);
    actualEnd = `${tempDate.getDate()} ${
      shortMonthNames[tempDate.getMonth()]
    } ${tempDate.getFullYear()}`;
  }

  return {
    actualStart,
    actualEnd,
  };
}
