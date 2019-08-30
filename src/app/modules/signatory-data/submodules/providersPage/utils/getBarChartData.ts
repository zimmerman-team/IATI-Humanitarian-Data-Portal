import get from 'lodash/get';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export const getBarChartData = (
  rawData,
  codelist
): HorizontalBarChartCardModel => {
  const totalCount = get(rawData, 'facets.count', 0);
  const values = sortBy(
    get(rawData, 'facets.orgTypes.buckets', []).map(bucket => ({
      name: get(find(codelist, { code: bucket.val }), 'name'),
      value: bucket.count,
    })),
    'name'
  ).reverse();
  return {
    title: 'Humanitarian providers breakdown',
    data: {
      values: values.map(value => ({
        ...value,
        percentage: Math.round((value.value * 100) / totalCount),
      })),
    },
  };
};
