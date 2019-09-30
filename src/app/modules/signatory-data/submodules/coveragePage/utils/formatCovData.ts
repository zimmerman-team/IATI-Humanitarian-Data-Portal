/* interfaces/models */
import { CovTimeItemModel, OrgTotExpItemModel } from '../store/interfaces';

/* utils */
import { formatDate } from 'app/utils/generic';
import { convertCurr } from 'app/utils/currency';
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';
import get from 'lodash/get';

// helper function to convert/sum up the transaction
// values from the data
function formatValue(currItem, defCurreny: string): [number, string] | null {
  let disExpVal: number | null = null;
  if (currItem) {
    const transValues = currItem.buckets;

    disExpVal = 0;
    // and here because there might be some transactions
    // of different currency and datastore does not have
    // a conversion option, we will convert each transaction
    // sum here to the default currency and add them all up
    transValues.forEach(trans => {
      let convertedValue = trans.transaction_sum;
      // so if the transactions value is different
      // than the default value we convert it
      if (trans.val !== defCurreny) {
        convertedValue = convertCurr(
          trans.transaction_sum,
          trans.val,
          defCurreny
        );
      }
      disExpVal += convertedValue;
    });
  }

  return disExpVal !== null ? [disExpVal, defCurreny] : null;
}

// simple helper function to convert values
// and check if appropriate values have been passed in
function convertHelper(
  value: number | null,
  from: string | undefined,
  to: string
): [number, string] | null {
  let convertedValue = value;

  if (value !== null && to !== from && from) {
    convertedValue = convertCurr(value, from, to);
  }

  return convertedValue !== null ? [convertedValue, to] : null;
}

export function formatCovData(
  covData: CovTimeItemModel[] | null,
  covOrgData: OrgTotExpItemModel[] | null,
  defCurr: string | null,
  perRange: number
): Array<Array<string | number | null | Array<string | number | null>>> {
  const tableData: Array<
    Array<string | number | null | Array<string | number | null>>
  > = [];

  const defCurreny: string =
    defCurr || get(covData, '[0].trans_currency.buckets[0].val', 'USD');

  // we ofcourse sort the org data by date so it would be correct
  const orgDataz = covOrgData && sortBy(covOrgData, ['period_start']);

  const lastOrgDataz: Array<
    Array<string | number | null | Array<string | number | null>>
  > = [];
  if (orgDataz) {
    orgDataz.forEach(orgItem => {
      if (orgItem.period_end && orgItem.period_start) {
        const rangeVal = get(covData, '[0].val');
        const transPerStart = moment(rangeVal, 'YYYY-MM-DD');
        if (
          !covData ||
          (rangeVal &&
            moment(orgItem.period_end).isBefore(transPerStart, 'day'))
        ) {
          // so here we'll first push in all of the org_tot_exp
          // data that apears before the transactions
          // and ofcourse we'll add 'No data' in those transaction places
          // OR if there's no trans data found we just simply push in all
          // of the org data
          tableData.push([
            formatDate(orgItem.period_start),
            formatDate(orgItem.period_end),
            convertHelper(orgItem.value, orgItem.currency, defCurreny),
            null,
            'No Data',
          ]);
        } else if (covData) {
          const lastRange = get(covData, `[${covData.length - 1}].val`);
          const transLastdate = moment(lastRange, 'YYYY-MM-DD')
            .add(perRange, 'months')
            .subtract(1, 'days');

          if (
            lastRange &&
            moment(orgItem.period_start).isAfter(transLastdate, 'day')
          ) {
            // so here if we have any org dates which precedes the last trans date
            // we push them into this lastOrgDataz array and will concat
            // it to the main tableData AFTER the main org trans item
            // formating is done
            lastOrgDataz.push([
              formatDate(orgItem.period_start),
              formatDate(orgItem.period_end),
              convertHelper(orgItem.value, orgItem.currency, defCurreny),
              null,
              'No Data',
            ]);
          }
        }
      }
    });
  }

  if (covData) {
    covData.forEach(item => {
      const transPerStart = moment(item.val, 'YYYY-MM-DD');
      const transPerEnd = moment(item.val, 'YYYY-MM-DD')
        .add(perRange, 'months')
        .subtract(1, 'days');

      const orgItem =
        orgDataz &&
        find(orgDataz, oItem => {
          // oke so here we do need to do these return trues/false
          // cause if we only return the if condition, type script
          // goes haywire #JustTypeScriptThings
          if (
            oItem.period_end &&
            oItem.period_start &&
            ((moment(oItem.period_start).isSameOrBefore(transPerStart, 'day') &&
              moment(oItem.period_end).isSameOrAfter(transPerEnd, 'day')) ||
              moment(oItem.period_start).isBetween(
                transPerStart,
                transPerEnd
              ) ||
              moment(oItem.period_end).isBetween(transPerStart, transPerEnd))
          ) {
            return true;
          }
          return false;
        });

      const disbsExpValue = formatValue(item.trans_currency, defCurreny);
      let opFunds: [number, string] | null = null;
      let rating = 'No Data';

      if (orgItem) {
        opFunds = convertHelper(orgItem.value, orgItem.currency, defCurreny);
        if (opFunds !== null && disbsExpValue !== null) {
          rating = `${((100 * disbsExpValue[0]) / opFunds[0]).toFixed(2)} %`;
        }
      }

      // tableData.push([
      //   formatDate(transPerStart.format()),
      //   formatDate(transPerEnd.format()),
      //   opFunds,
      //   disbsExpValue,
      //   rating,
      // ]);
    });
  }

  return tableData;
}
