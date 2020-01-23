import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getHumActWLocationInfoData = (
  rawData,
  tooltipsData
): ListModel => {
  const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [
    get(rawData, 'facets.humActWLocationInfoData_1.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_2.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_3.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_4.count', 0),
    get(rawData, 'facets.humActWLocationInfoData_region.count', 0),
  ];
  return {
    title: 'Humanitarian activites with location information',
    elName: 'incComms',
    items: [
      {
        label: 'Recipient countries',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Recipient countries'
        ),
        values: [
          {
            ptc: percentage(itemCounts[0], allActCount),
            qtc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Recipient regions',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Recipient regions'
        ),
        values: [
          {
            ptc: percentage(itemCounts[4], allActCount),
            qtc: itemCounts[4],
          },
        ],
      },
      {
        label: 'Latitude / longitude coordinates',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Latitude / longitude coordinates'
        ),
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
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Describing location according to a recognised geo-location gazetteer'
        ),
        values: [
          {
            ptc: percentage(itemCounts[2], allActCount),
            qtc: itemCounts[2],
          },
        ],
      },
      {
        label: 'Using any other type of sub-national location data',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Using any other type of sub-national location data'
        ),
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
