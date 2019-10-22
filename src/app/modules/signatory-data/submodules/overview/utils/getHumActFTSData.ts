import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActFTSData = (
  rawData,
  tooltipsData,
  onItemClick
): ListModel => {
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
    items: [
      {
        label: 'Humanitarian OECD DAC sector codes',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Humanitarian OECD DAC sector codes'
        ),
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Humanitarian indicator',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Humanitarian indicator'
        ),
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'UN humanitarian response plan(s)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'UN humanitarian response plan(s)'
        ),
        onClick: () => {
          onItemClick({
            label: 'UN humanitarian response plan(s)',
            value:
              '(humanitarian_scope_vocabulary:2-1 AND humanitarian_scope_code:*)',
          });
        },
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'GLIDE code(s)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'GLIDE code(s)'
        ),
        values: [
          {
            ptc: percentage(itemCounts[3], allActCount),
            qtc: itemCounts[3],
          },
        ],
      },
      {
        label: "Organisation's own internal crisis codes(ie using vocab '99')",
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          "Organisation's own internal crisis codes(ie using vocab '99')"
        ),
        values: [
          {
            ptc: percentage(itemCounts[4], allActCount),
            qtc: itemCounts[4],
          },
        ],
      },
      {
        label: 'Clusters',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Clusters'
        ),
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
