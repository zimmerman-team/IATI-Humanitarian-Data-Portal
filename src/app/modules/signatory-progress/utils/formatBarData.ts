import { FacetsModel } from 'app/modules/signatory-progress/store/interface';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';
import { dateRanges } from 'app/modules/signatory-progress/const';
import { specPubsItemModel } from './intefaces';

export function formatBarData(
  publisherData: FacetsModel | null,
  specPubsData: Array<specPubsItemModel>
): HorizontalBarChartCardModel {
  const barData: HorizontalBarChartCardModel = {
    title: 'Signatories meeting Data Publication CCTRIs',
    data: { values: [] },
  };

  if (publisherData) {
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
        item.specPub[rangeKey].org_count &&
        publisherData[rangeKey].org_count
      ) {
        // a simple proportion calculation is applied here
        // to get the percentage value
        percentage = Math.round(
          (item.specPub[rangeKey].org_count * 100) /
            publisherData[rangeKey].org_count
        );

        value = item.specPub[rangeKey].org_count;
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
