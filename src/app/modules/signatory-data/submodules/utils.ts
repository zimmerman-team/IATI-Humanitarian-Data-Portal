import get from 'lodash/get';
import uniq from 'lodash/uniq';
import sortBy from 'lodash/sortBy';
import { formatDate } from 'app/utils/generic';

export const getAllYears = data => {
  let years = data.map(y => y.value.slice(0, 4));
  years = sortBy(uniq(years));
  return years;
};

export const getHeaderDateRange = dates => {
  const date1 = get(dates, 'date1', null);
  const date2 = get(dates, 'date2', null);
  return `${date1 ? formatDate(date1).slice(2) : ''} - ${
    date2 ? formatDate(date2).slice(2) : ''
  }`;
};
