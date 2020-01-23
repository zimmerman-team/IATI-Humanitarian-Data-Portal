import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getActivitySummaryData = (rawData, tooltipsData): ListModel => {
  const allActivitiesCount = get(rawData.yearsData, 'count', 0);
  return {
    title: 'Activity summary',
    elName: 'incComms',
    subtitle: '',
    items: [
      {
        label: 'All activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'All activities'
        ),
        values: [
          {
            ptc: undefined,
            qtc: allActivitiesCount,
          },
        ],
      },
      {
        label: 'Humanitarian activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Humanitarian activities'
        ),
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
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Current humanitarian activities'
        ),
        values: [
          {
            ptc: percentage(
              get(rawData.humData, 'facets.currentHumValuesData.count', 0),
              get(rawData.humData, 'facets.count', 0)
            ),
            qtc: get(rawData.humData, 'facets.currentHumValuesData.count', 0),
          },
        ],
      },
    ],
  };
};
