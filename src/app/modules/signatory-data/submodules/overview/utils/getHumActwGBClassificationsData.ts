import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActwGBClassificationsData = (
  rawData,
  tooltipsData,
  onItemClick
): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActwGBClassificationsData_1.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_2.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_3.count', 0),
    get(rawData, 'facets.humActwGBClassificationsData_4.count', 0),
  ];
  return {
    title: 'Hum. activities with Grand Bargain classifications',
    elName: 'incComms',
    // subtitle: 'Activities with humanitarian OECD DAC sector code(s)',
    items: [
      {
        label: 'Earmarking (categories)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Earmarking (categories)'
        ),
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Earmarking (modalities)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Earmarking (modalities)'
        ),
        values: [
          {
            ptc: percentage(itemCounts[1], allActCount),
            qtc: itemCounts[1],
          },
        ],
      },
      {
        label: 'Partner country based (I)NGO organisation type used',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Partner country based (I)NGO organisation type used'
        ),
        onClick: () => {
          onItemClick({
            label: 'Partner country based (I)NGO organisation type used',
            value: '(participating_org_type:24 AND participating_org_role:4)',
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
        label: 'Cash Transfer or Vouchers',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Cash transfer'
        ),
        onClick: () => {
          onItemClick({
            label: 'Cash Transfer or Vouchers',
            value:
              '(default_aid_type_vocabulary:4 AND default_aid_type_code:*)',
          });
        },
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
