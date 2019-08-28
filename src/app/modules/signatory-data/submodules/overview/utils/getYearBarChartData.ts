import get from 'lodash/get';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';
import { YearBarChartObjectModel } from 'app/modules/signatory-data/submodules/overview/model';

export const getYearBarChartData = (
  rawData,
  years
): YearBarChartObjectModel[] => {
  const yearValues: YearBarChartObjectModel[] = [];
  if (rawData.length > 0) {
    years.forEach(y => {
      const nonHumActYearKey = find(
        Object.keys(get(find(rawData, { value: '0' }), 'queries', [])),
        key => key.indexOf(y.toString()) > -1
      );
      const nonHumActYearCount = nonHumActYearKey
        ? find(rawData, { value: '0' }).queries[nonHumActYearKey as string]
        : 0;
      const humActYearKey = find(
        Object.keys(get(find(rawData, { value: '1' }), 'queries', [])),
        key => key.indexOf(y.toString()) > -1
      );
      const humActYearCount = humActYearKey
        ? find(rawData, { value: '1' }).queries[humActYearKey as string]
        : 0;
      yearValues.push({
        year: y,
        activities: nonHumActYearCount + humActYearCount,
        activitiesColor: '#d7d8d9',
        humanitarianActivities: humActYearCount,
        humanitarianActivitiesColor: '#5accbf',
      });
    });
  }
  return sortBy(yearValues, 'year');
};
