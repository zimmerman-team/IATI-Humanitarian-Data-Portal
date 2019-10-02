import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActWLocationInfoData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActWLocationInfoData_1.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_2.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_3.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_4.count', 0),
  ];
  return {
    title: 'Hum. activites with location information',
    elName: 'incComms',
    items: [
      {
        label: 'Activities with recipient countries',
        tooltip: 'Activities with recipient countries',
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Latitude / longitude coordinates',
        tooltip: 'Latitude / longitude coordinates',
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label:
          'Describing location according to a recognised geo-location gazetteer',
        tooltip:
          'Describing location according to a recognised geo-location gazetteer',
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Using any other type of sub-national location data',
        tooltip: 'Using any other type of sub-national location data',
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
