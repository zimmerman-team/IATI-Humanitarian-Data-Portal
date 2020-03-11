import { CovTimeItemModel, OrgTotExpItemModel } from '../store/interfaces';

/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { formatDate } from 'app/utils/generic';
import { convertCurr, convertHelper } from 'app/utils/currency';
import moment from 'moment';

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

export function formatCovData(
  covData: CovTimeItemModel[] | null,
  covOrgData: OrgTotExpItemModel[] | null,
  defCurr: string | null
): Array<Array<string | number | null | Array<string | number | null>>> {
  const tableData: Array<
    Array<string | number | null | Array<string | number | null>>
  > = [];

  if (covData) {
    let defCurreny = defCurr;

    let covDataz = covData;
    if (!covOrgData) {
      // so if there's no organisation total expenditure data
      // what we will get from the transaction endpoint is
      // annual date range values and it will be formed as an array
      covDataz = get(covData, 'date_range_unsepcified.buckets', []);
    }

    Object.entries(covDataz).forEach(covItem => {
      const covKey = covItem[0];
      // first key is always count so we ignore it
      if (covKey !== 'count') {
        const covValue = covItem[1];
        let opFunds: [number, string] | null = null;
        let rating = 'no data';
        let startDate = '';
        let endDate = '';
        let rawStartDate = 0;
        let rawEndDate = 0;

        if (covOrgData) {
          // specific way to get the start and end date from the facet keys
          // according to how they are formed in 'formatTransFacets' function
          startDate = covKey.substring(11, 21);
          endDate = covKey.substring(32, 42);
        } else {
          startDate = covValue.val;
          endDate = moment(covValue.val, 'YYYY-MM-DD')
            .add(12, 'months')
            .subtract(1, 'days')
            .format();
        }

        rawStartDate = new Date(startDate).getTime();
        rawEndDate = new Date(endDate).getTime();

        if (!defCurreny) {
          defCurreny = get(covValue, 'trans_currency.buckets[0].val', 'USD');
        }

        // we get the trans value
        const disbsExpValue =
          covValue.trans_currency && defCurreny
            ? formatValue(covValue.trans_currency, defCurreny)
            : null;

        // we get the org value
        if (covOrgData) {
          const orgTotExp = find(covOrgData, orgItem => {
            return (
              orgItem.period_start === startDate &&
              orgItem.period_end === endDate
            );
          });
          if (orgTotExp) {
            const orgHumTot = find(
              orgTotExp.expense_line,
              (l: any) => l.ref === 'HUMTOT'
            );
            console.log(orgHumTot);
            opFunds =
              orgHumTot && defCurreny
                ? convertHelper(
                    orgHumTot.value.value,
                    orgHumTot.value.currency.code,
                    defCurreny
                  )
                : null;
          } else {
            opFunds = null;
          }
        }

        // aaand we calculate the rating
        if (disbsExpValue !== null && opFunds !== null) {
          rating = `${((100 * disbsExpValue[0]) / opFunds[0]).toFixed(2)} %`;
        }

        tableData.push([
          rawStartDate,
          rawEndDate,
          opFunds,
          disbsExpValue,
          rating,
        ]);
      }
    });
  }

  return tableData;
}
