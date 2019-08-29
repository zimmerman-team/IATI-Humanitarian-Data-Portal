import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';
import { YearBarChartObjectModel } from 'app/modules/signatory-data/submodules/overview/model';

export const getYearBarChartData = (rawData): YearBarChartObjectModel[] => {
  const yearValues: YearBarChartObjectModel[] = [];
  if (!isEmpty(rawData)) {
    Object.keys(rawData).forEach(y => {
      if (typeof rawData[y] === 'object') {
        yearValues.push({
          year: y,
          activities: rawData[y].count,
          activitiesColor: '#d7d8d9',
          humanitarianActivities: rawData[y].hum_count.count,
          humanitarianActivitiesColor: '#5accbf',
        });
      }
    });
  }
  return sortBy(yearValues, 'year');
};
