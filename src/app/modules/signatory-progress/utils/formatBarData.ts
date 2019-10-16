/* consts */
import { linesOrder } from 'app/modules/signatory-progress/const';
/* models/interfaces */
import { SpecPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

/* utils */
import find from 'lodash/find';
import { getAllSigCount, getIatiSigCount, getRealSigCount } from './general';

export function formatBarData(
  gbsignatories: SingleDefGBSignatory[] | null,
  specPubsData: Array<SpecPubsItemModel>
): HorizontalBarChartCardModel {
  const barData: HorizontalBarChartCardModel = {
    title: 'Signatories meeting data publication CCTRIs',
    data: { values: [] },
  };

  if (gbsignatories) {
    // We'll get the all gb signatory count for comparison
    // here
    const allSigCount = getAllSigCount(gbsignatories);
    // getting the latest dateRange key
    const iatiSigCount = getIatiSigCount(gbsignatories);
    // We'll push the first bar data item here
    barData.data.values.push({
      value: iatiSigCount,
      percentage: Math.round((iatiSigCount * 100) / allSigCount),
      name: 'Signatories publishing to IATI',
    });

    specPubsData.forEach(item => {
      // so here we'll use the latest data for the bar chart
      // and thats why we choose the last item from dateRanges
      // as the rangeKey
      let percentage: null | number = null;
      let value: null | number = null;

      if (item.specPub) {
        const specSigCount = getRealSigCount(gbsignatories, item.specPub);
        // a simple proportion calculation is applied here
        // to get the percentage value
        percentage = Math.round((specSigCount * 100) / allSigCount);

        value = specSigCount;
      }

      barData.data.values.push({
        value,
        percentage,
        name: item.name,
      });
    });
  }

  const orderedBarData: HorizontalBarChartValueModel[] = [
    { name: '', value: 0, percentage: 0 },
    { name: '', value: 0, percentage: 0 },
    { name: '', value: 0, percentage: 0 },
    { name: '', value: 0, percentage: 0 },
    { name: '', value: 0, percentage: 0 },
  ];
  barData.data.values.forEach(item => {
    const orderObj = find(linesOrder, { line: item.name });
    if (orderObj) {
      orderedBarData[orderObj.n] = item;
    }
  });

  return { ...barData, data: { values: orderedBarData } };
}
