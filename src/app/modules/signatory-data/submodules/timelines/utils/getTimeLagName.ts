/* utils */
import find from 'lodash/find';
import { getYearMonths } from 'app/modules/signatory-data/submodules/timelines/utils/general';

// so this generates the timelag value according to the assesment
// described here - http://publishingstats.iatistandard.org/timeliness_timelag.html
export function getTimeLagName(timelag: Array<Array<string | number>>): string {
  const yearMonths = getYearMonths();

  if (!timelag || timelag.length === 0) {
    return 'No data';
  }

  let timeLagFreq = 0;

  for (let index = 0; index < yearMonths.length; index += 1) {
    const yearMonth = yearMonths[index];
    const yearRow = find(timelag, lagItem => lagItem[0] === yearMonth.year);

    // we add a one cause the first item in a year row contains the year
    // and we only want to check against months which are all of the remaining
    // elements in the year row
    if (yearRow && yearRow[yearMonth.month + 1] !== '00') {
      timeLagFreq += 1;
    }

    switch (true) {
      case timeLagFreq >= 2 && index === 2:
        return 'One month in arrears';
      case timeLagFreq > 0 && index === 2:
        return 'A quarter in arrears';
      case timeLagFreq > 0 && index === 5:
        return 'Six months in arrears';
      case timeLagFreq > 0 && index === 11:
        return 'One year in arrears';
    }
  }

  return 'More than one year in arrears';
}
