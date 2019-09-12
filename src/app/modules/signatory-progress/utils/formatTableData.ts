import { dateRanges } from 'app/modules/signatory-progress/const';
import { checkIfValid, getAllSigCount, getRealSigCount } from './general';
import { SigItemModel, specPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from '../../../state/api/interfaces/gbsignatoryInterface';

export function formatTableData(
  publisherData: SigItemModel,
  specPubsData: Array<specPubsItemModel>,
  gbsignatories: SingleDefGBSignatory[]
): Array<Array<string | number>> {
  const tableData: Array<Array<string | number>> = [];

  if (publisherData) {
    // so as discussed we only have a flat amount of them
    // not associated with dates, so we put them in like so
    const allSigCount = getAllSigCount(gbsignatories);
    tableData.push([
      'Total no. of Grand Bargain Signatories',
      allSigCount,
      allSigCount,
      allSigCount,
      allSigCount,
      0,
    ]);

    tableData.push(['Organisations* publishing to IATI']);
    let lastRangKey = '';
    let befLastRKey = '';
    // and here we push in the actual values for all the organisations
    dateRanges.forEach((range, index) => {
      const rangeKey = `orgs_[${range.value}]`;
      const pubIatiPercent = Math.round(
        (publisherData[rangeKey].sigCount * 100) / allSigCount
      );
      tableData[1].push(
        `${pubIatiPercent}% (${publisherData[rangeKey].sigCount})`
      );
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
      publisherData[lastRangKey].sigCount - publisherData[befLastRKey].sigCount;
    tableData[1].push(`${change}`);

    // and now we do the same for the rest of the data
    // just we loop according to the specific publisher data
    // array
    specPubsData.forEach(item => {
      tableData.push([item.name]);
      // this is the last tableData index
      // to which we'll push our current data
      const lastInd = tableData.length - 1;

      let beforeLastSigC = 0;
      let lastSigCount = 0;
      // and here we push in the actual values for all the organisations
      dateRanges.forEach((range, index) => {
        const rangeKey = `orgs_[${range.value}]`;
        let percentage = 0;
        let value = 0;

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

          value = specSigCount;

          if (index === dateRanges.length - 2) {
            beforeLastSigC = specSigCount;
          }
          if (index === dateRanges.length - 1) {
            lastSigCount = specSigCount;
          }
        }

        tableData[lastInd].push(`${percentage}% (${value})`);
      });

      // and here we'll push in the calculation for changes between
      // may and today, aka changes between the last two items
      const changez = lastSigCount - beforeLastSigC;
      tableData[lastInd].push(`${changez}`);
    });
  }

  return tableData;
}
