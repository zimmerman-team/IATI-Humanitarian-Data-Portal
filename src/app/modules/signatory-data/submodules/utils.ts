import uniq from 'lodash/uniq';
import sortBy from 'lodash/sortBy';

export const getYearRange = data => {
  let years = data.map(y => y.value.slice(0, 4));
  years = sortBy(uniq(years));
  return `${years[0]}-${years[years.length - 1]}`;
};
export const getAllYears = data => {
  let years = data.map(y => y.value.slice(0, 4));
  years = sortBy(uniq(years));
  return years;
};
