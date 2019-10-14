/* utils */
import find from 'lodash/find';
import get from 'lodash/get';

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

interface DateInterface {
  Start: string;
  End: string;
}

// accepts string data of various formats
// and reforamts it to 'Day shortMName Year'
export function formatDate(strDate: string | null | undefined) {
  if (strDate) {
    const tempDate = new Date(strDate);
    return `${tempDate.getDate()} ${
      shortMonthNames[tempDate.getMonth()]
    } ${tempDate.getFullYear()}`;
  }
  return '';
}

// util function to get actual start
// and end dates according to the iati standard
// http://reference.iatistandard.org/203/codelists/ActivityDateType/
// when provided with date and date type arrays
// where the indexes correspond to each other.
// The actual start date is of type code 2
// and the actual end is of type code 4
// if there is no actual start/end dates, take planned start/end date
// ALSO this formats the dates
export function getActualDates(
  dates: string[],
  dateTypes: string[]
): DateInterface {
  let Start = '';
  let End = '';

  const actualStartIndex = dateTypes.indexOf('2');
  const actualEndIndex = dateTypes.indexOf('4');
  const plannedStartIndex = dateTypes.indexOf('1');
  const plannedEndIndex = dateTypes.indexOf('3');
  if (actualStartIndex !== -1) {
    // and here we format the date
    Start = formatDate(dates[actualStartIndex]);
  } else {
    Start = formatDate(dates[plannedStartIndex]);
  }
  if (actualEndIndex !== -1) {
    // and here we format the date
    End = formatDate(dates[actualEndIndex]);
  } else {
    End = formatDate(dates[plannedEndIndex]);
  }

  return {
    Start,
    End,
  };
}

// helper function to get the english narrative from
// narrative arrays
export function getNarrativeText(narArray, doubleArray?: boolean) {
  let engNarr = find(narArray, ['lang', 'en']);

  if (doubleArray) {
    // ye so because the response structure is bad
    // it uses double arrays for no reason
    // we need to use the first arrays items key
    engNarr = find(narArray, ['[0]lang', 'en']);

    engNarr = engNarr && engNarr[0];
  }

  if (engNarr) {
    return engNarr.narrative || engNarr.text || 'no data';
  }
  if (doubleArray) {
    // ye so because the response structure is bad
    // it uses double arrays for no reason
    // we need to use the first arrays items key
    return (
      get(narArray, '[0][0].narrative', 'no data') ||
      get(narArray, '[0][0].text', 'no data')
    );
  }

  return (
    get(narArray, '[0].narrative', 'no data') ||
    get(narArray, '[0].text', 'no data')
  );
}

export function getTooltipContent(tooltipsData, page, title) {
  const tooltip = find(tooltipsData, {
    page: page,
    title: title,
  });
  let info = '';
  if (!tooltip) {
    return info;
  }
  if (tooltip.purpose) {
    info += 'Purpose:';
    info += '\n\n';
    info += tooltip.purpose;
  }
  if (tooltip.whyGB) {
    if (info !== '') {
      info += '\n\n\n';
    }
    info += 'Why is this information for the Grand Bargain:';
    info += '\n\n';
    info += tooltip.whyGB;
  }
  if (tooltip.calculation) {
    if (info !== '') {
      info += '\n\n\n';
    }
    info += 'How is this value calculated:';
    info += '\n\n';
    info += tooltip.calculation;
  }
  return info;
}
