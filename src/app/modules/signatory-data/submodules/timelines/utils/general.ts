import moment from 'moment';

export interface YearMonthItem {
  year: number;
  month: number;
}

// helper function to generate year month
// array for the past twelve months
// this is needed as the years might and in most cases
// will differ for the past twelve months
export function getYearMonths(): YearMonthItem[] {
  const yearMonths: YearMonthItem[] = [];
  // and we will also NOT want to include the current month for this
  let currDate = moment().subtract(1, 'months');

  for (let i = 0; i < 12; i += 1) {
    yearMonths.push({
      year: currDate.year(),
      month: currDate.month(),
    });
    currDate = currDate.subtract(1, 'months');
  }

  return yearMonths;
}
