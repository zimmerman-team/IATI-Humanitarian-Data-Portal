/* models/interfaces */
import { FrequencyItem } from 'app/modules/signatory-data/submodules/timelines/store/interfaces';
/* utils */
import moment from 'moment';
import find from 'lodash/find';

// helper function to generate the month date array
// according to the first and last frequency datas
// month_date value, this way all of the frequency gaps
// will be covered as well.
function generateMonthArr(firstDate: string, lastDate: string): string[] {
  const monthDates: string[] = [];
  // we also substring the first date as we always want
  // the array to start from the very first month of the year
  let currDate = moment(`${firstDate.substring(0, 4)}-01-01`);
  const endDate = moment(`${lastDate.substring(0, 4)}-12-01`);

  while (!currDate.isSame(endDate)) {
    const monthDate = currDate.format().substring(0, 7);
    monthDates.push(monthDate);
    currDate = currDate.add(1, 'months');
  }

  // and we also push in the last date
  // as it doesn't get pushed in the loop
  monthDates.push(`${lastDate.substring(0, 4)}-12`);

  return monthDates;
}

export function formatFrequency(
  frequencies: FrequencyItem[] | null
): Array<Array<string | number>> {
  const freqData: Array<Array<string | number>> = [];

  if (frequencies && frequencies.length > 0) {
    const monthDates = generateMonthArr(
      frequencies[0].month_date,
      frequencies[frequencies.length - 1].month_date
    );

    let currYear = '1000';
    let yearRow: Array<string | number> = [];

    monthDates.forEach(monthDate => {
      const year = monthDate.substring(0, 4);

      if (currYear !== year) {
        if (yearRow.length > 0) {
          freqData.push(yearRow);
        }

        currYear = year;
        yearRow = [year];
      }

      let freqValue: string | number = '00';
      const freqItem = find(frequencies, ['month_date', monthDate]);

      if (freqItem) {
        freqValue = freqItem.updates_for_month;
      }

      yearRow.push(freqValue);
    });

    // and we also need to push in the last year row
    // as it is not added in the loop
    freqData.push(yearRow);
  }
  return freqData.reverse();
}
