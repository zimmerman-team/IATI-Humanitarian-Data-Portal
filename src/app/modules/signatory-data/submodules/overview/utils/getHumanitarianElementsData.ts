/* eslint-disable no-restricted-globals */
import get from 'lodash/get';
import { HumanitarianDonutModel } from 'app/modules/signatory-data/submodules/overview/model';

export const getHumanitarianElementsData = (
  rawData,
  donut4Data,
  humOverviewData
): HumanitarianDonutModel[] => {
  const donutValues: HumanitarianDonutModel[] = [
    { activity: 'Hum. activities with UN HRP codes *', value: 0 },
    { activity: 'Hum. activities with cluster codes *', value: 0 },
    { activity: 'Hum. activities glide codes *', value: 0 },
    {
      activity:
        '% of activities with both humanitarian indicator and also a valid humanitarian sector code',
      value: 0,
    },
  ];
  if (rawData) {
    donutValues.forEach((item, index) => {
      let value = 0;
      if (index < 4) {
        value =
          (get(rawData, `facets.humElData_${index + 1}.count`, 0) * 100) /
          get(humOverviewData, 'facets.count', 0);
      } else {
        value =
          (get(donut4Data, 'facets.data.count', 0) * 100) /
          get(humOverviewData, 'facets.count', 0);
      }
      donutValues[index].value = isNaN(value) ? 0 : Math.round(value);
    });
  }
  return donutValues;
};
