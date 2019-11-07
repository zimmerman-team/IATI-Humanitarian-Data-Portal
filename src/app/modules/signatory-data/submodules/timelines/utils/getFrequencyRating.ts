/* utils */
import { getYearMonths } from 'app/modules/signatory-data/submodules/timelines/utils/general';
import moment from 'moment';
import find from 'lodash/find';

// so this generates the frequency rating according to the assesment
// described here - http://publishingstats.iatistandard.org/timeliness.html
export function getFrequencyRating(
  frequency: Array<Array<string | number>>,
  firstPubDate: string
): string {
  const yearMonths = getYearMonths();
  let freqRating = 'No Frequency Rating Found';

  if (!frequency || frequency.length === 0) {
    freqRating = 'No data';
  } else {
    // variable to store the publishing period for a
    // publisher based on today and the first dataset
    // they appear in
    const pubPeriod = moment().diff(firstPubDate, 'months');

    let freqCount = 0;
    let l2Months = false;
    let l4Months = false;
    let sixMonthly: number | boolean = 0;
    let pub6Quarterly: number | boolean = 0;

    for (let index = 0; index < yearMonths.length; index += 1) {
      const yearMonth = yearMonths[index];
      const yearRow = find(
        frequency,
        freqItem => freqItem[0] === yearMonth.year.toString()
      );

      // we add a one cause the first item in a year row contains the year
      // and we only want to check against months which are all of the remaining
      // elements in the year row
      if (yearRow && yearRow[yearMonth.month + 1] !== '00') {
        freqCount += 1;
      }

      // here we register if updates have been found
      // for the last two months it will be used in the lower
      // frequency rating calculations
      if (index === 1 && freqCount > 0) {
        l2Months = true;
      }

      // here we register if updates have been found
      // for the last four months it will be used in the lower
      // frequency rating calculations
      if (index === 3 && freqCount > 0) {
        l4Months = true;
      }

      // here we check the six-monthly value
      // where updates had to be reported in two 6 month periods
      if (index === 5 && freqCount > 0) {
        sixMonthly = freqCount;
      }
      if (index > 5 && freqCount > sixMonthly) {
        sixMonthly = true;
      }

      // here we check the quarterly value for the publisher of 6 months
      // where updates had to be reported in two quarters
      // so similar logic to above
      if (index === 2 && freqCount > 0) {
        pub6Quarterly = freqCount;
      }
      if (index > 2 && index < 6 && freqCount > pub6Quarterly) {
        pub6Quarterly = true;
      }

      switch (true) {
        case pubPeriod >= 12 && freqCount >= 7 && index === 11 && l2Months:
          freqRating = 'Monthly';
          break;
        case pubPeriod >= 12 && freqCount >= 3 && index === 11 && l4Months:
          freqRating = 'Quarterly';
          break;
        case pubPeriod >= 12 && sixMonthly === true && index === 11:
          freqRating = 'Six-monthly';
          break;
        case (pubPeriod >= 12 || (pubPeriod >= 6 && pubPeriod < 12)) &&
          freqCount > 0 &&
          index === 11:
          freqRating = 'Annual';
          break;
        case pubPeriod >= 12:
          freqRating = 'Less than annual';
          break;
        case pubPeriod >= 6 && pubPeriod < 12 && freqCount >= 4 && index === 5:
          freqRating = 'Monthly';
          break;
        case pubPeriod >= 6 &&
          pubPeriod < 12 &&
          pub6Quarterly === true &&
          index === 5:
          freqRating = 'Quarterly';
          break;
        case pubPeriod >= 3 && pubPeriod < 6 && freqCount === 3 && index === 2:
          freqRating = 'Monthly';
          break;
        case pubPeriod >= 3 && pubPeriod < 6 && freqCount > 0 && index === 5:
          freqRating = 'Annual';
          break;
        case pubPeriod < 3 && freqCount > 0 && index === 2:
          freqRating = 'Annual';
          break;
      }
    }
  }

  return freqRating;
}
