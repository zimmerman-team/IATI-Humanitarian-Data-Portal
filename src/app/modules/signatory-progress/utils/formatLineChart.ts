/* consts */
import {
  constructDateRanges,
  linesOrder,
} from 'app/modules/signatory-progress/const';
/* models/interfaces */
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { DataPoint, SpecPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';
import { SignatoryProgress } from 'app/state/api/interfaces/signatoryProgressInterface';

/* utils */
import find from 'lodash/find';
import {
  getAllSigCount,
  getIatiSigCount,
  getRealSigCount,
  getSpecFixedValues,
} from './general';
import { shortMonthNames } from '../../../__consts__/dates';

interface SigDateCountModel {
  key: string;
  value: number;
}

export interface FirstDataItemModel {
  data: DataPoint[];
  totalSigCount: number;
  sigDateCounts: SigDateCountModel[];
}

function formatFirstLine(
  gbsignatories: SingleDefGBSignatory[],
  dateRanges: any
): FirstDataItemModel {
  // so first we get the actual amount of GB
  // signatories
  const allSigCount = getAllSigCount(gbsignatories);
  const firstData: DataPoint[] = [];
  const sigDateCounts: SigDateCountModel[] = [];
  dateRanges.forEach((range, index) => {
    // so here we always load the fixed value data as the percentage
    let percentage = range.allPerc !== undefined ? range.allPerc : 0;

    // BUT if its the last item of the date ranges
    // we load the todays data the one that actual data
    // from datastore as the percentage
    if (index === dateRanges.length - 1) {
      // we get the iati sigCount
      const iatiSigCount = getIatiSigCount(gbsignatories);
      // a simple proportion calculation is applied here
      // to get the percentage value
      percentage = Math.round((iatiSigCount * 100) / allSigCount);
    } else if (range.allCount && range.allPerc) {
      const dateAllSigCount = Math.round(
        (range.allCount * 100) / range.allPerc
      );

      sigDateCounts.push({
        key: range.value,
        value: dateAllSigCount,
      });
    }

    firstData.push({
      x: range.label,
      y: percentage,
    });
  });

  return {
    data: firstData,
    totalSigCount: allSigCount,
    sigDateCounts,
  };
}

export function formatLineChart(
  gbsignatories: SingleDefGBSignatory[] | null,
  specPubsData: Array<SpecPubsItemModel>,
  signatoryProgressData: SignatoryProgress
): LineChartCardModel {
  const lineData: LineChartCardModel = {
    title: 'Data publication aggregated signatory progress',
    values: { values: [] },
  };
  let dateRanges: any[] = [];

  if (signatoryProgressData !== null) {
    dateRanges = constructDateRanges(signatoryProgressData);
  }

  if (gbsignatories) {
    // first here we form Signatories publishing
    // to IATI line by comparing
    const firstDataItem = formatFirstLine(gbsignatories, dateRanges);
    lineData.values.values.push({
      data: firstDataItem.data,
      id: 'Signatories publishing to IATI',
    });

    const allSigCount = firstDataItem.totalSigCount;

    specPubsData.forEach(item => {
      const data: DataPoint[] = [];

      dateRanges.forEach((range, index) => {
        const fixedData = getSpecFixedValues(range, item.key);

        let percentage: null | number = null;

        if (fixedData.percentage === 0) {
          percentage = 0;
        }

        // so now here we need to calculate the overall percentage change
        // for all remaining lines, and because we only get percentages
        // which are 'of these' refering to the signatories publishing
        // data to iati, we will need to get the signatory count for the specified
        // date AND then make a percentage against the fixed value count
        // and the signatory count for the specified date
        const dateAllSigCount = find(firstDataItem.sigDateCounts, [
          'key',
          range.value,
        ]);
        if (
          dateAllSigCount !== undefined &&
          fixedData.count !== null &&
          fixedData.percentage !== null &&
          percentage !== 0
        ) {
          percentage = Math.round(
            (fixedData.count * 100) / dateAllSigCount.value
          );
        }

        if (index === dateRanges.length - 1 && item.specPub) {
          const specSigCount = getRealSigCount(gbsignatories, item.specPub);
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

  const orderedLineData = [
    { id: '0', data: [{ x: 0, y: 0 }] },
    { id: '0', data: [{ x: 0, y: 0 }] },
    { id: '0', data: [{ x: 0, y: 0 }] },
    { id: '0', data: [{ x: 0, y: 0 }] },
    { id: '0', data: [{ x: 0, y: 0 }] },
  ];
  lineData.values.values.forEach(item => {
    const orderObj = find(linesOrder, { line: item.id });
    if (orderObj) {
      orderedLineData[orderObj.n] = item;
    }
  });

  return { ...lineData, values: { values: orderedLineData } };
}
