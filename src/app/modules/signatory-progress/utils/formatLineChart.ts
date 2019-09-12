/* consts */
import { dateRanges } from 'app/modules/signatory-progress/const';
/* models/interfaces */
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { DataPoint, SigItemModel, specPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';

/* utils */
import { checkIfValid, getAllSigCount, getRealSigCount } from './general';

export interface FirstDataItemModel {
  data: DataPoint[];
  totalSigCount: number;
}

function formatFirstLine(
  publisherData: SigItemModel,
  gbsignatories: SingleDefGBSignatory[]
): FirstDataItemModel {
  // so first we get the actual amount of GB
  // signatories
  const allSigCount = getAllSigCount(gbsignatories);
  const firstData: DataPoint[] = [];
  dateRanges.forEach(range => {
    const rangeKey = `orgs_[${range.value}]`;
    // a simple proportion calculation is applied here
    // to get the percentage value
    const percentage = Math.round(
      (publisherData[rangeKey].sigCount * 100) / allSigCount
    );

    firstData.push({
      x: range.label,
      y: percentage,
    });
  });

  return {
    data: firstData,
    totalSigCount: allSigCount,
  };
}

export function formatLineChart(
  publisherData: SigItemModel,
  specPubsData: Array<specPubsItemModel>,
  gbsignatories: SingleDefGBSignatory[]
): LineChartCardModel {
  const lineData: LineChartCardModel = {
    title: 'Data Publication Aggregated Signatory Progress',
    values: { values: [] },
  };

  if (publisherData) {
    // first here we form Signatories publishing
    // to IATI line by comparing
    const firstDataItem = formatFirstLine(publisherData, gbsignatories);
    lineData.values.values.push({
      data: firstDataItem.data,
      id: 'Signatories publish to IATI',
    });

    const allSigCount = firstDataItem.totalSigCount;

    specPubsData.forEach(item => {
      const data: DataPoint[] = [];

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
          // This way the specific sig data would be compared to the
          // Signatories publishing to IATI amount
          // which would make the linechart make little sense
          // cause we would have the signatories publishing humanitarian
          // data have a bigger percentage than the signatories publishing
          // data to IATI
          // percentage = Math.round(
          //   (specSigCount * 100) / publisherData[rangeKey].sigCount
          // );
          // so we'll use this percantage proportion instead
          // we'll compare the flat amount of signatories to all specific data
          // as that will be more accurate at least line chart wise
          percentage = Math.round((specSigCount * 100) / allSigCount);
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
