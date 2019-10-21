import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';
import { YearBarChartObjectModel } from 'app/modules/signatory-data/submodules/overview/model';

export const getYearBarChartData = (rawData): YearBarChartObjectModel[] => {
  const yearValues: YearBarChartObjectModel[] = [];
  if (!isEmpty(rawData)) {
    Object.keys(rawData).forEach(y => {
      if (typeof rawData[y] === 'object' && rawData[y]) {
        yearValues.push({
          year: y,
          activitiesAct: rawData[y].count,
          Activities: rawData[y].count - get(rawData[y], 'hum_count.count', 0),
          ActivitiesColor: '#d7d8d9',
          'Humanitarian Activities': get(rawData[y], 'hum_count.count', 0),
          'Humanitarian ActivitiesColor': '#5accbf',
        });
      }
    });
  }
  return sortBy(yearValues, 'year');
};
