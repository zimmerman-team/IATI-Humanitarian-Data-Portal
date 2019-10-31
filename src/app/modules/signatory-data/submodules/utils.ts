import get from 'lodash/get';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';
import { shortMonthNames } from 'app/__consts__/dates';

export const getYearRange = data => {
  let years = data.map(y => ({
    year: y.value.slice(0, 4),
    date: new Date(y.value),
  }));
  years = sortBy(uniqBy(years, 'year'));
  let rangeStr = '';
  if (years) {
    if (years[0]) {
      rangeStr = `${get(
        shortMonthNames,
        `[${years[0].date.getMonth()}]`,
        ''
      )} ${get(years, '[0].year', '')}`;
    }
    if (years[1]) {
      rangeStr += ` - ${get(
        shortMonthNames,
        `[${years[years.length - 1].date.getMonth()}]`,
        ''
      )} ${get(years, `[${years.length - 1}].year`, '')}`;
    }
  }
  return rangeStr;
};

export const getAllYears = data => {
  let years = data.map(y => y.value.slice(0, 4));
  years = sortBy(uniq(years));
  return years;
};
