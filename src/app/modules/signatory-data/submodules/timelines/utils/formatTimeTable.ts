/* interfaces/models */
import { TimelagItemModel } from 'app/modules/signatory-data/submodules/timelines/store/interfaces';

export function formatTimeTable(
  timelags: TimelagItemModel[] | null
): Array<Array<string | number>> {
  const timelagData: Array<Array<string | number>> = [];

  const initialMonthArray = [
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
  ];

  if (timelags) {
    let prevYear = 0;
    timelags.forEach(timelag => {
      // so here we'll divide each items date into
      // year and month
      const date = new Date(timelag.val);
      const currYear = date.getFullYear();
      const currMonth = date.getMonth();

      // so here we check if the current year
      // is not equal to the previous year
      // and if it is we just push in a new row into the table data
      // as it will be of another year, and we reset the prevYear
      // variable
      if (prevYear !== currYear) {
        prevYear = currYear;
        // and we ofcourse need to push in all empty values
        // initially
        timelagData.push([currYear, ...initialMonthArray]);
      }
      // and here we set the current items count to the
      // specific month slot of the pushed or the previous row
      timelagData[timelagData.length - 1][currMonth + 1] = timelag.count;
    });
  }

  return timelagData.reverse();
}
