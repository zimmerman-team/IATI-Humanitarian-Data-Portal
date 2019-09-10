/* consts */
import { dateRanges } from 'app/modules/signatory-progress/const';
/* models/interfaces */
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { DataPoint, SigItemModel, specPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';

/* utils */
import { checkIfValid, getRealSigCount } from './general';

export function formatLineChart(
  publisherData: SigItemModel,
  specPubsData: Array<specPubsItemModel>,
  gbsignatories: SingleDefGBSignatory[]
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
          const specSigCount = getRealSigCount(
            gbsignatories,
            item.specPub[rangeKey].org_refs.buckets
          );

          // a simple proportion calculation is applied here
          // to get the percentage value
          percentage = Math.round(
            (specSigCount * 100) / publisherData[rangeKey].sigCount
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
