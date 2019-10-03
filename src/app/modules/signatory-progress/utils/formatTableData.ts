import { dateRanges } from 'app/modules/signatory-progress/const';
import {
  getAllSigCount,
  getIatiSigCount,
  getRealSigCount,
  getSpecFixedValues,
} from './general';
import { SpecPubsItemModel } from './intefaces';
import { SingleDefGBSignatory } from 'app/state/api/interfaces/gbsignatoryInterface';

export function formatTableData(
  gbsignatories: SingleDefGBSignatory[],
  specPubsData: Array<SpecPubsItemModel>
): Array<Array<string | number>> {
  const tableData: Array<Array<string | number>> = [];

  // so as discussed we only have a flat amount of them
  // not associated with dates, so we put them in like so
  const allSigCount = getAllSigCount(gbsignatories);

  // now we will use this variable to store the total no of GB signatories
  // now because we don't actually have this data we will need to tackle this
  // during the calculations of the orgs publishing to IATI
  // as we can apply a percentage proportion according to that data
  // to actually get the amount of GB signatories for the specified year
  const totGBSigs: (string | number)[] = [
    'Total no. of Grand Bargain signatories',
  ];

  tableData.push(['Organisations* publishing to IATI']);
  const allIatiSigCount = getIatiSigCount(gbsignatories);
  let befLastCount: number | undefined = 0;
  let lastCount: number | undefined = 0;
  // and here we push in the actual values for all the organisations
  dateRanges.forEach((range, index) => {
    let iatiPerc = range.allPerc;
    let iatiCount = range.allCount;

    if (index === dateRanges.length - 2) {
      befLastCount = iatiCount;
    }

    if (index === dateRanges.length - 1) {
      iatiCount = allIatiSigCount;
      iatiPerc = Math.round((iatiCount * 100) / allSigCount);
      lastCount = iatiCount;
    }

    tableData[0].push(`${iatiPerc}% (${iatiCount})`);

    if (iatiCount && iatiPerc) {
      // and this is how we calculate the total no of GB
      // signatories according to the perc and count values
      // of the signatories publishing to iati
      const dateAllSigCount = Math.round((iatiCount * 100) / iatiPerc);
      totGBSigs.push(dateAllSigCount);
    }
  });

  // and here we'll push in the calculation for changes between
  // may and today, aka changes between the last two items
  const change = lastCount - befLastCount;
  tableData[0].push(`${change}`);

  // and here we push the change for the total GB no
  const lastTotValue: number | string = totGBSigs[totGBSigs.length - 1];
  const befLastTotValue: number | string = totGBSigs[totGBSigs.length - 2];
  let totChange = 0;
  if (typeof lastTotValue === 'number' && typeof befLastTotValue === 'number') {
    totChange = lastTotValue - befLastTotValue;
  }
  totGBSigs.push(totChange);

  // AND HERE we push the tot GB sigs as the first row of table data
  tableData.unshift(totGBSigs);

  // pushing in the 'Of these' row
  tableData.push(['Of these']);

  // and now we do the same for the rest of the data
  // just we loop according to the specific publisher data
  // array
  specPubsData.forEach(item => {
    tableData.push([item.name]);
    // this is the last tableData index
    // to which we'll push our current data
    const lastInd = tableData.length - 1;

    let beforeLastSigC: number | null = 0;
    let lastSigCount = 0;
    // and here we push in the actual values for all the organisations
    dateRanges.forEach((range, index) => {
      const fixedData = getSpecFixedValues(range, item.key);
      let percentage = fixedData.percentage;
      let value = fixedData.count;

      if (index === dateRanges.length - 2) {
        beforeLastSigC = value;
      }

      if (index === dateRanges.length - 1 && item.specPub) {
        const specSigCount = getRealSigCount(gbsignatories, item.specPub);

        // a simple proportion calculation is applied here
        // to get the percentage value
        percentage = Math.round((specSigCount * 100) / allIatiSigCount);

        value = specSigCount;

        lastSigCount = specSigCount;
      }

      let tableCell = `${percentage}% (${value})`;
      if (percentage === null || value === null) {
        tableCell = 'NOT MEASURED';
      }

      tableData[lastInd].push(tableCell);
    });

    // and here we'll push in the calculation for changes between
    // may and today, aka changes between the last two items
    const changez = lastSigCount - beforeLastSigC;
    tableData[lastInd].push(`${changez}`);
  });

  return tableData;
}
