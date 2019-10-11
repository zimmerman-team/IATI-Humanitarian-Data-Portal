import get from 'lodash/get';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getFinancialReportingData = (
  rawData,
  sigMetadata,
  tooltipsData
): ListModel => {
  // const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [get(rawData, 'facets.currency.buckets[0].val', '')];
  return {
    title: 'Financial reporting',
    elName: 'incComms',
    items: [
      {
        label: 'Default currency',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Default currency'
        ),
        values: [
          {
            qtc: '',
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Reports to UN OCHA Financial Tracking Service (FTS)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Reports to UN OCHA Financial Tracking Service (FTS)'
        ),
        values: [
          {
            qtc: '',
            ptc: sigMetadata ? sigMetadata.reportsToFTS : 'no data',
          },
        ],
      },
      {
        label: 'Reports to UN OCHA Financial Tracking Service (FTS) via IATI',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Reports to UN OCHA Financial Tracking Service (FTS) via IATI'
        ),
        values: [
          {
            qtc: '',
            ptc: sigMetadata ? sigMetadata.reportsToFTSViaIATI : 'no data',
          },
        ],
      },
      {
        label: 'Reports to European Union (EDRIS)',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Overview',
          'Reports to European Union (EDRIS)'
        ),
        values: [
          {
            qtc: '',
            ptc: sigMetadata ? sigMetadata.reportsToEU : 'no data',
          },
        ],
      },
      /*{
        label: 'Coverage for [2019]',
        tooltip: 'Coverage for [2019]',
        values: [
          {
            qtc: '',
            ptc: 'TBD',
          },
        ],
      },*/
    ],
  };
};
