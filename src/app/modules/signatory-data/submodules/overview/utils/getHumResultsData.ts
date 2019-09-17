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
        label: 'Activities with results',
        tooltip: 'Activities with results',
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'With results documents links',
        tooltip: 'With results documents links',
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'With result indicators with baseline and target values',
        tooltip: 'With result indicators with baseline and target values',
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'With result indicator documents links',
        tooltip: 'With result indicator documents links',
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
