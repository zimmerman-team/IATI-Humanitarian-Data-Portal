import get from 'lodash/get';
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
    subtitle: 'Activities with humanitarian OECD DAC sector code(s)',
    items: [
      {
        label:
          'Activities with humanitarian OECD DAC sector code 700 or 70000 range',
        tooltip:
          'Activities with humanitarian OECD DAC sector code 700 or 70000 range',
        values: [
          {
            ptc: `${Math.round((itemCounts[0] * 100) / allActCount)}%`,
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'With humanitarian indicator',
        tooltip: 'With humanitarian indicator',
        values: [
          {
            ptc: `${Math.round((itemCounts[1] * 100) / allActCount)}%`,
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'With UN Humanitarian Response Plan(s)',
        tooltip: 'With UN Humanitarian Response Plan(s)',
        values: [
          {
            ptc: `${Math.round((itemCounts[2] * 100) / allActCount)}%`,
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'With GLIDE code(s)',
        tooltip: 'With GLIDE code(s)',
        values: [
          {
            ptc: `${Math.round((itemCounts[3] * 100) / allActCount)}%`,
            qtc: itemCounts[3],
          },
        ],
      },
      {
        label:
          "With organisation's own internal crisis codes(ie using vocab '99')",
        tooltip:
          "With organisation's own internal crisis codes(ie using vocab '99')",
        values: [
          {
            ptc: `${Math.round((itemCounts[4] * 100) / allActCount)}%`,
            qtc: itemCounts[4],
          },
        ],
      },
      {
        label: 'With clusters',
        tooltip: 'With clusters',
        values: [
          {
            ptc: `${Math.round((itemCounts[5] * 100) / allActCount)}%`,
            qtc: itemCounts[5],
          },
        ],
      },
    ],
  };
};
