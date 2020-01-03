import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import isEmpty from 'lodash/isEmpty';
import { YearBarChartObjectModel } from 'app/modules/signatory-data/submodules/overview/model';

export const getYearBarChartData = (rawData): YearBarChartObjectModel[] => {
  const yearValues: YearBarChartObjectModel[] = [];
  if (!isEmpty(rawData)) {
    Object.keys(rawData).forEach(y => {
      if (typeof rawData[y] === 'object' && rawData[y]) {
        const activitiesAct = rawData[y].count;
        const humActivities = get(rawData[y], 'hum_count.count', 0);
        const activities =
          humActivities === activitiesAct
            ? 0
            : activitiesAct - get(rawData[y], 'hum_count.count', 0);
        yearValues.push({
          year: y,
          activitiesAct: activitiesAct,
          Activities: activities,
          ActivitiesColor: '#d7d8d9',
          'Humanitarian Activities': humActivities,
          'Humanitarian ActivitiesColor': '#5accbf',
        });
      }
    });
  }
  return sortBy(yearValues, 'year');
};
