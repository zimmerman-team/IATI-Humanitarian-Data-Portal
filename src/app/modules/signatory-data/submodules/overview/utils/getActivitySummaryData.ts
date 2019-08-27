import get from 'lodash/get';
import find from 'lodash/find';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getActivitySummaryData = (rawData): ListModel => {
  const humanitarianCount = get(
    find(rawData.yearsData, { value: '1' }),
    'count',
    0
  );
  const allActivitiesCount =
    humanitarianCount +
    get(find(rawData.yearsData, { value: '0' }), 'count', 0);
  return {
    title: 'Activity Summary',
    subtitle: '',
    items: [
      {
        label: 'All activities',
        tooltip: 'All activities',
        values: [
          {
            ptc: undefined,
            qtc: allActivitiesCount,
          },
        ],
      },
      {
        label: 'Humanitarian activities',
        values: [
          {
            ptc: `${Math.round(
              (humanitarianCount * 100) / allActivitiesCount
            )}%`,
            qtc: humanitarianCount,
          },
        ],
      },
      {
        label: 'Current humanitarian activities',
        values: [
          {
            ptc: `${Math.round(
              (get(
                rawData.currentHumActData,
                'facets.currentHumValuesData.count',
                0
              ) *
                100) /
                allActivitiesCount
            )}%`,
            qtc: get(
              rawData.currentHumActData,
              'facets.currentHumValuesData.count',
              0
            ),
          },
        ],
      },
    ],
  };
};
