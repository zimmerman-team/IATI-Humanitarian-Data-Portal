import get from 'lodash/get';
import { HumanitarianDonutModel } from 'app/modules/signatory-data/submodules/overview/model';

export const getHumanitarianElementsData = (
  rawData,
  humActCount
): HumanitarianDonutModel[] => {
  const donutValues: HumanitarianDonutModel[] = [
    { activity: 'Hum. activities with UN HRP codes', value: 0 },
    { activity: 'Hum. activities with Cluster codes ', value: 0 },
    { activity: 'Hum. activities Glide codes ', value: 0 },
    {
      activity:
        '% of activities with both humanitarian indicator and also a valid humanitarian sector code',
      value: 0,
    },
  ];
  if (rawData) {
    donutValues.forEach((item, index) => {
      const value =
        (get(rawData, `facets.humElData_${index + 1}.count`, 0) * 100) /
        humActCount;
      donutValues[index].value = isNaN(value) ? 0 : Math.round(value);
    });
  }
  return donutValues;
};
