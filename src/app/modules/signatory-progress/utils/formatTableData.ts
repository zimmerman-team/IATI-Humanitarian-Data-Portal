import { FacetsModel } from 'app/modules/signatory-progress/store/interface';
import { dateRanges } from 'app/modules/signatory-progress/const';
import { checkIfValid } from './general';
import { specPubsItemModel } from './intefaces';

export function formatTableData(
  publisherData: FacetsModel | null,
  specPubsData: Array<specPubsItemModel>,
  gbOrgRefs: string[]
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

    // pushing in the 'Of these' row
    tableData.push(['Of these']);

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
