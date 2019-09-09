import { FacetsModel } from 'app/modules/signatory-progress/store/interface';
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { dateRanges } from 'app/modules/signatory-progress/const';
import { DataPoint, specPubsItemModel } from './intefaces';
import { checkIfValid } from './general';

export function formatLineChart(
  publisherData: FacetsModel | null,
  specPubsData: Array<specPubsItemModel>,
  gbOrgRefs: string[]
): LineChartCardModel {
  const lineData: LineChartCardModel = {
    title: 'Data Publication Aggregated Signatory Progress',
    values: { values: [] },
  };

  console.log('specPubsData', specPubsData);

  // so this part forms the line 'Publishing hum. activity data'
  if (publisherData) {
    specPubsData.forEach(item => {
      const data: Array<DataPoint> = [];

      dateRanges.forEach(range => {
        const rangeKey = `orgs_[${range.value}]`;

        let percentage: null | number = null;

        if (checkIfValid(item, publisherData, rangeKey)) {
          // a simple proportion calculation is applied here
          // to get the percentage value
          percentage = Math.round(
            (item.specPub[rangeKey].org_count * 100) /
              publisherData[rangeKey].org_count
          );
        }

        data.push({
          x: range.label,
          y: percentage,
        });
      });

      lineData.values.values.push({
        data,
        id: item.name,
      });
    });
  }

  return lineData;
}

// TODO: use this kind of faceting
const formingQuery = {
  'orgs_[1900-01-01_TO_2017-06-30]': {
    type: 'query',
    q: 'last_updated_datetime:[1900-01-01T00:00:00Z TO 2017-06-30T24:00:00Z]',
    facet: {
      org_refs: {
        type: 'terms',
        field: 'reporting_org_ref',
      },
    },
  },
  'orgs_[1900-01-01_TO_2018-12-31]': {
    type: 'query',
    q: 'last_updated_datetime:[1900-01-01T00:00:00Z TO 2018-12-31T24:00:00Z]',
    facet: {
      org_refs: {
        type: 'terms',
        field: 'reporting_org_ref',
      },
    },
  },
  'orgs_[1900-01-01_TO_2019-05-31]': {
    type: 'query',
    q: 'last_updated_datetime:[1900-01-01T00:00:00Z TO 2019-05-31T24:00:00Z]',
    facet: {
      org_refs: {
        type: 'terms',
        field: 'reporting_org_ref',
      },
    },
  },
  'orgs_[1900-01-01_TO_NOW]': {
    type: 'query',
    q: 'last_updated_datetime:[1900-01-01T00:00:00Z TO NOW]',
    facet: {
      org_refs: {
        type: 'terms',
        field: 'reporting_org_ref',
      },
    },
  },
};
