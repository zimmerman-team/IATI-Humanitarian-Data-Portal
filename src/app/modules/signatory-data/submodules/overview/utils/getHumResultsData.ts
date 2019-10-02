import get from 'lodash/get';
import { ListModel } from 'app/components/datadisplay/Lists/model';
import { percentage } from '../../../../../utils/percentage';

export const getHumResultsData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.HRActivitiesRes.count', 0),
    get(rawData, 'facets.HRActDocLinks.count', 0),
    get(rawData, 'facets.HRActIndBase.count', 0),
    get(rawData, 'facets.HRIndDocLinks.count', 0),
  ];
  return {
    title: 'Humanitarian results',
    elName: 'incComms',
    subtitle: 'Humanitarian results',
    items: [
      {
        label: 'Results',
        tooltip: 'Results',
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Results documents links',
        tooltip: 'Results documents links',
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'Result indicators with baseline and target values',
        tooltip: 'Result indicators with baseline and target values',
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Result indicator documents links',
        tooltip: 'Result indicator documents links',
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
