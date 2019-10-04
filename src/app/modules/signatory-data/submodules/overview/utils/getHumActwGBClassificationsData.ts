import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActwGBClassificationsData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActwGBClassificationsData_1.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_2.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_3.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_4.count', 0),
  ];
  return {
    title: 'Hum. activity with Grand Bargain classifications',
    elName: 'incComms',
    // subtitle: 'Activities with humanitarian OECD DAC sector code(s)',
    items: [
      {
        label: 'Earmarked for Grand Bargain (categories)',
        tooltip: 'Earmarked for Grand Bargain (categories)',
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Earmarked for Grand Bargain (modalities)',
        tooltip: 'Earmarked for Grand Bargain (modalities)',
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'Partner country based (I)NGO organisation type used',
        tooltip: 'Partner country based (I)NGO organisation type used',
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Cash transfer (not yet available in IATI standard)',
        tooltip: 'Cash transfer (not yet available in IATI standard)',
        values: [{ ptc: 'TBD', qtc: 'TBD' }],
        // values: [
        //   {
        //     ptc: percentage(itemCounts[3], allActCount),
        //     qtc: itemCounts[3],
        //   },
        // ],
        highlight: true,
      },
    ],
  };
};
