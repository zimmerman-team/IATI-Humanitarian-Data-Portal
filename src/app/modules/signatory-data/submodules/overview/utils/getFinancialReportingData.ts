import get from 'lodash/get';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getFinancialReportingData = (rawData, sigMetadata): ListModel => {
  // const allActCount = get(rawData, 'facets.count', 0) || 1;
  const itemCounts = [get(rawData, 'facets.currency.buckets[0].val', '')];
  return {
    title: 'Financial reporting',
    elName: 'incComms',
    items: [
      {
        label: 'Default currency',
        tooltip: 'Default currency',
        values: [
          {
            qtc: '',
            ptc: itemCounts[0],
          },
        ],
      },
      {
        label: 'Reports to UN OCHA Financial Tracking Service (FTS)',
        tooltip: 'Reports to UN OCHA Financial Tracking Service (FTS)',
        values: [
          {
            qtc: '',
            ptc: sigMetadata ? sigMetadata.reportsToFTS : 'no data',
          },
        ],
      },
      {
        label: 'Reports to UN OCHA for FTS via IATI',
        tooltip: 'Reports to UN OCHA for FTS via IATI',
        values: [
          {
            qtc: '',
            ptc: sigMetadata ? sigMetadata.reportsToFTSViaIATI : 'no data',
          },
        ],
      },
      {
        label: 'Reports to European Union (EDRIS)',
        tooltip: 'Reports to European Union (EDRIS)',
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
