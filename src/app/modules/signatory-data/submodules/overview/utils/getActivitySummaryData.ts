import get from 'lodash/get';
import { percentage } from './percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getActivitySummaryData = (rawData): ListModel => {
  const allActivitiesCount = get(rawData.yearsData, 'count', 0);
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
            ptc: percentage(
              get(rawData.humData, 'facets.count', 0),
              allActivitiesCount
            ),
            qtc: get(rawData.humData, 'facets.count', 0),
          },
        ],
      },
      {
        label: 'Current humanitarian activities',
        values: [
          {
            ptc: percentage(
              get(rawData.humData, 'facets.currentHumValuesData.count', 0),
              allActivitiesCount
            ),
            qtc: get(rawData.humData, 'facets.currentHumValuesData.count', 0),
          },
        ],
      },
    ],
  };
};
