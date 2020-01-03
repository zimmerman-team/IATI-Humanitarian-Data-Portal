import get from 'lodash/get';
import uniq from 'lodash/uniq';
import sortBy from 'lodash/sortBy';
import { formatDate } from 'app/utils/generic';
import find from 'lodash/find';

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

export const getActivityDateTypeField = data => {
  let field = 'activity_date_start_actual';
  for (let i = 0; i < data.length; i++) {
    if (find(data[i].activity_date_type, num => num === '2')) {
      field = 'activity_date_start_actual';
      break;
    } else if (find(data[i].activity_date_type, num => num === '1')) {
      field = 'activity_date_start_planned';
    }
  }
  return field;
};

export const getYearRange = (date1, date2) => {
  const result = [];
  if (date1 && date2) {
    const year1 = parseInt(date1.slice(0, 4), 10);
    const year2 = parseInt(date2.slice(0, 4), 10);
    for (let i = year1; i < year2 + 1; i++) {
      result.push(i as never);
    }
  }
  return result;
};
