/* models/interfaces */
import { LineChartCardModel } from 'app/components/surfaces/Cards/LineChartCard/model';
import { FacetsModel } from './store/interface';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

/* consts */
import { dateRanges } from './const';

interface DataPoint {
  x: string;
  y: number | null;
}

interface specPubsItemModel {
  name: string;
  specPub: Array<FacetsModel | null>;
}

// util function to check if data exists
// and can be processed/formatted
function checkIfValid(item, publisherData, rangeKey): boolean {
  return (
    item.specPub &&
    item.specPub[rangeKey] &&
    publisherData[rangeKey] &&
    item.specPub[rangeKey].org_count &&
    publisherData[rangeKey].org_count
  );
}

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

export function formatTableData(
  publisherData: FacetsModel | null,
  specPubsData: Array<specPubsItemModel>
): Array<Array<string>> {
  const tableData: Array<Array<string>> = [];

  if (publisherData) {
    // so here we push in some data for all of the grand bargain
    // signatories. (Right now we have no data on all of them)
    // divided by dates, so we just put in N/A
    tableData.push([
      'Total no. of Grand Bargain Signatories',
      'N/A',
      'N/A',
      'N/A',
      'N/A',
      'N/A',
    ]);

    tableData.push(['Organisations* publishing to IATI']);
    let lastRangKey = '';
    let befLastRKey = '';
    // and here we push in the actual values for all the organisations
    dateRanges.map((range, index) => {
      const rangeKey = `orgs_[${range.value}]`;
      tableData[1].push(`100% (${publisherData[rangeKey].org_count})`);
      if (index === dateRanges.length - 2) {
        befLastRKey = rangeKey;
      }
      if (index === dateRanges.length - 1) {
        lastRangKey = rangeKey;
      }
    });

    // and here we'll push in the calculation for changes between
    // may and today, aka changes between the last two items
    const change =
      publisherData[lastRangKey].org_count -
      publisherData[befLastRKey].org_count;
    tableData[1].push(`${change}`);

    // and now we do the same for the rest of the data
    // just we loop according to the specific publisher data
    // array
    specPubsData.forEach(item => {
      tableData.push([item.name]);
      // this is the last tableData index
      // to which we'll push our current data
      const lastInd = tableData.length - 1;

      lastRangKey = '';
      befLastRKey = '';
      // and here we push in the actual values for all the organisations
      dateRanges.map((range, index) => {
        const rangeKey = `orgs_[${range.value}]`;
        let percentage = 0;
        let value = 0;

        if (checkIfValid(item, publisherData, rangeKey)) {
          // a simple proportion calculation is applied here
          // to get the percentage value
          percentage = Math.round(
            (item.specPub[rangeKey].org_count * 100) /
              publisherData[rangeKey].org_count
          );

          value = item.specPub[rangeKey].org_count;

          if (index === dateRanges.length - 2) {
            befLastRKey = rangeKey;
          }
          if (index === dateRanges.length - 1) {
            lastRangKey = rangeKey;
          }
        }

        tableData[lastInd].push(`${percentage}% (${value})`);
      });

      // and here we'll push in the calculation for changes between
      // may and today, aka changes between the last two items
      const changez =
        item.specPub && item.specPub[lastRangKey] && item.specPub[befLastRKey]
          ? item.specPub[lastRangKey].org_count -
            item.specPub[befLastRKey].org_count
          : '';
      tableData[lastInd].push(`${changez}`);
    });
  }

  return tableData;
}
