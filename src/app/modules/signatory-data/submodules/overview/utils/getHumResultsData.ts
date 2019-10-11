import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumResultsData = (rawData, tooltipsData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.HRActivitiesRes.count', 0),
    get(rawData, 'facets.HRActDocLinks.count', 0),
    get(rawData, 'facets.HRActIndBase.count', 0),
    get(rawData, 'facets.HRIndDocLinks.count', 0),
  ];
  return {
    title: 'Hum. activities',
    elName: 'incComms',
    // subtitle: 'Hum results',
    items: [
      {
        label: 'Results',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Results'
        ),
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Results documents links',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Results documents links'
        ),
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'Result indicators with baseline and target values',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Result indicators with baseline and target values'
        ),
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Result indicator documents links',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Result indicator documents links'
        ),
        values: [
          {
            ptc: percentage(itemCounts[3], allActCount),
            qtc: itemCounts[3],
          },
        ],
      },
    ],
  };
};
