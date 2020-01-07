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
  const date3 = get(dates, 'date3', null);
  const date4 = get(dates, 'date4', null);
  const _dates = [];
  if (new Date(date1) < new Date(date2)) {
    if (date1) {
      _dates.push(date1 as never);
    } else {
      _dates.push(date2 as never);
    }
  } else {
    _dates.push(date2 as never);
  }
  if (new Date(date3) > new Date(date4)) {
    _dates.push(date3 as never);
  } else {
    _dates.push(date4 as never);
  }
  return `${_dates[0] ? formatDate(_dates[0]).slice(2) : ''} - ${
    _dates[1] ? formatDate(_dates[1]).slice(2) : ''
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

export const getYearRange = (date1, date2, date3, date4) => {
  const result = [];
  const _dates = [];
  if (new Date(date1) < new Date(date2)) {
    if (date1) {
      _dates.push(date1 as never);
    } else {
      _dates.push(date2 as never);
    }
  } else {
    _dates.push(date2 as never);
  }
  if (new Date(date3) > new Date(date4)) {
    _dates.push(date3 as never);
  } else {
    _dates.push(date4 as never);
  }
  if (_dates.length === 2) {
    const year1 = parseInt((_dates[0] as string).slice(0, 4), 10);
    const year2 = parseInt((_dates[1] as string).slice(0, 4), 10);
    for (let i = year1; i < year2 + 1; i++) {
      result.push(i as never);
    }
  }
  return result;
};
