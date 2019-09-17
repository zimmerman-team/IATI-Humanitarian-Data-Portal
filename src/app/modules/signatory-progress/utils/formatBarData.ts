/* consts */
import { dateRanges } from 'app/modules/signatory-progress/const';
/* models/interfaces */
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';
import { SigItemModel, specPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';
/* utils */
import { getAllSigCount, getRealSigCount } from './general';

export function formatBarData(
  publisherData: SigItemModel,
  specPubsData: Array<specPubsItemModel>,
  gbsignatories: SingleDefGBSignatory[]
): HorizontalBarChartCardModel {
  const barData: HorizontalBarChartCardModel = {
    title: 'Signatories meeting Data Publication CCTRIs',
    data: { values: [] },
  };

  if (publisherData) {
    // We'll get the all gb signatory count for comparison
    // here
    const allSigCount = getAllSigCount(gbsignatories);
    // getting the latest dateRange key
    const lastRKey = `orgs_[${dateRanges[dateRanges.length - 1].value}]`;
    // getting the latest publisher data
    const lastPubData = publisherData[lastRKey];
    // We'll push the first bar data item here
    barData.data.values.push({
      value: lastPubData.sigCount,
      percentage: Math.round((lastPubData.sigCount * 100) / allSigCount),
      name: 'Signatories publishing to IATI',
    });
    specPubsData.forEach(item => {
      // so here we'll use the latest data for the bar chart
      // and thats why we choose the last item from dateRanges
      // as the rangeKey
      const rangeKey = `orgs_[${dateRanges[dateRanges.length - 1].value}]`;
      let percentage: null | number = null;
      let value: null | number = null;

      if (
        item.specPub &&
        item.specPub[rangeKey] &&
        publisherData[rangeKey] &&
        item.specPub[rangeKey].org_refs &&
        publisherData[rangeKey].sigCount !== null
      ) {
        const specSigCount = getRealSigCount(
          gbsignatories,
          item.specPub[rangeKey].org_refs.buckets
        );
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

  return barData;
}
