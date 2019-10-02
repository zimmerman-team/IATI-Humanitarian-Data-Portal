import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActFTSData = (rawData): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActFTSData_1.count', 0),
    get(rawData, 'facets.humActFTSData_2.count', 0),
    get(rawData, 'facets.humActFTSData_3.count', 0),
    get(rawData, 'facets.humActFTSData_4.count', 0),
    get(rawData, 'facets.humActFTSData_5.count', 0),
    get(rawData, 'facets.humActFTSData_6.count', 0),
  ];
  return {
    title: 'Hum. activities with FTS Import related',
    elName: 'incComms',
    // subtitle: 'Activities with humanitarian OECD DAC sector code(s)',
    items: [
      {
        label:
          'Humanitarian OECD DAC sector code 700 or 70000 range',
        tooltip:
          'Humanitarian OECD DAC sector code 700 or 70000 range',
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Humanitarian indicator',
        tooltip: 'Humanitarian indicator',
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'UN Humanitarian Response Plan(s)',
        tooltip: 'UN Humanitarian Response Plan(s)',
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'GLIDE code(s)',
        tooltip: 'GLIDE code(s)',
        values: [
          {
            ptc: percentage(itemCounts[3], allActCount),
            qtc: itemCounts[3],
          },
        ],
      },
      {
        label: "Organisation's own internal crisis codes(ie using vocab '99')",
        tooltip:
          "Organisation's own internal crisis codes(ie using vocab '99')",
        values: [
          {
            ptc: percentage(itemCounts[4], allActCount),
            qtc: itemCounts[4],
          },
        ],
      },
      {
        label: 'Clusters',
        tooltip: 'Clusters',
        values: [
          {
            ptc: percentage(itemCounts[5], allActCount),
            qtc: itemCounts[5],
          },
        ],
      },
    ],
  };
};
