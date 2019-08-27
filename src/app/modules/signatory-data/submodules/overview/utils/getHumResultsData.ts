import get from 'lodash/get';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumResultsData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humResultsData_1.count', 0),
    get(rawData, 'facets.humResultsData_2.count', 0),
    get(rawData, 'facets.humResultsData_3.count', 0),
    get(rawData, 'facets.humResultsData_4.count', 0),
  ];
  return {
    title: 'Humanitarian results',
    items: [
      {
        label: 'Activities with results',
        tooltip: 'Activities with results',
        values: [
          {
            ptc: 'TBD',
            qtc: 'TBD',
          },
        ],
      },
      {
        label: 'With results documents links',
        tooltip: 'With results documents links',
        values: [
          {
            ptc: 'TBD',
            qtc: 'TBD',
          },
        ],
      },
      {
        label: 'With result indicators with baseline and target values',
        tooltip: 'With result indicators with baseline and target values',
        values: [
          {
            ptc: 'TBD',
            qtc: 'TBD',
          },
        ],
      },
      {
        label: 'With result indicator documents links',
        tooltip: 'With result indicator documents links',
        values: [
          {
            ptc: 'TBD',
            qtc: 'TBD',
          },
        ],
      },
    ],
  };
};
