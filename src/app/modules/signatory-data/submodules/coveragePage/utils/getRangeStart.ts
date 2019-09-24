import get from 'lodash/get';
import moment from 'moment';
import { OrgTotExpItemModel } from '../store/interfaces';

export function getRangeStart(orgData: OrgTotExpItemModel[], perRange: number) {
  let periodRange = perRange;
  const totExps = get(orgData, 'organisation_total_expenditure', []);
  let startDateTxt = '1900-01-01T00:00:00Z';
  if (totExps.length > 0) {
    const lastItem = totExps[totExps.length - 1];

    const startDate = moment(lastItem.period_start);
    let startMonth = startDate.month() + 1 + '';
    startMonth = startMonth.length < 2 ? `0${startMonth}` : startMonth;
    let startDay = startDate.date() + '';
    startDay = startDay.length < 2 ? `0${startDay}` : startDay;
    startDateTxt = `1900-${startMonth}-${startDay}T00:00:00Z`;
    // we also add one day here so that moment would include the
    // last day into the difference calculation
    const endDate = moment(lastItem.period_end).add(1, 'days');
    periodRange = endDate.diff(startDate, 'months');
  }

  return {
    startDateTxt,
    periodRange,
  };
}
