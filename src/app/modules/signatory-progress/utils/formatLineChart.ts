import { FacetsModel } from 'app/modules/signatory-progress/store/interface';
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { dateRanges } from 'app/modules/signatory-progress/const';
import { DataPoint, specPubsItemModel } from './intefaces';
import { checkIfValid } from './general';

export function formatLineChart(
  publisherData: FacetsModel | null,
  specPubsData: Array<specPubsItemModel>
): LineChartCardModel {
  const lineData: LineChartCardModel = {
    title: 'Data Publication Aggregated Signatory Progress',
    values: { values: [] },
  };

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
