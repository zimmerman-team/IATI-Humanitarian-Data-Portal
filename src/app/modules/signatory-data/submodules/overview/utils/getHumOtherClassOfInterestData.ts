import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumOtherClassOfInterestData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humOtherClassOfInterestData_1.count', 0),
    get(rawData, 'facets.humOtherClassOfInterestData_2.count', 0),
    get(rawData, 'facets.humOtherClassOfInterestData_3.count', 0),
    get(rawData, 'facets.humOtherClassOfInterestData_4.count', 0),
  ];
  return {
    title: 'Hum. other classifications of intererest',
    elName: 'incComms',
    items: [
      {
        label: 'OECD DAC sector codes',
        tooltip: 'OECD DAC sector codes',
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'OECD DAC aid types',
        tooltip: 'OECD DAC aid types',
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'OECD DAC gender marker',
        tooltip: 'OECD DAC gender marker',
        values: [
          {
            ptc: percentage(itemCounts[3], allActCount),
            qtc: itemCounts[3],
          },
        ],
      },
      {
        label: 'Sustainable Development Goals (SDGs)',
        tooltip: 'Sustainable Development Goals (SDGs)',
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
    ],
  };
};
