/* interfaces/models */
import { CovTimeItemModel } from '../store/interfaces';

/* utils */
import { formatDate } from 'app/utils/generic';
import { convertCurr } from 'app/utils/currency';

interface ValCurrItem {
  value: number | null;
  currency: string | null;
}

// helper function to convert/sum up the transaction
// values from the data
function formatValue(currItem, defCurreny): ValCurrItem {
  let defCurr = defCurreny;
  let incFundsValue: number | null = null;
  if (currItem) {
    const transValues = currItem.buckets;
    // so here we'll set the default currency for all transaction
    // values, because there might be several different currency
    // transactions we'll pick the first items currency
    // and use that for all transactions
    if (!defCurr) {
      defCurr = transValues[0].val;
    }

    incFundsValue = 0;
    // and here because there might be some transactions
    // of different currency and datastore does not have
    // a conversion option, we will convert each transaction
    // sum here to the default currency and add them all up
    transValues.forEach(trans => {
      let convertedValue = trans.transaction_sum;
      // so if the transactions value is different
      // than the default value we convert it
      if (trans.val !== defCurr) {
        convertedValue = convertCurr(trans.transaction_sum, trans.val, defCurr);
      }
      incFundsValue += convertedValue;
    });
  }
  return {
    value: incFundsValue,
    currency: defCurr,
  };
}

export function formatCovData(
  covData: CovTimeItemModel[] | null
): Array<Array<string | number | null | Array<string | number | null>>> {
  const tableData: Array<
    Array<string | number | null | Array<string | number | null>>
  > = [];

  let defCurreny: string | null = null;

  if (covData) {
    covData.forEach(item => {
      const periodStart = formatDate(item.val);

      // here we will be replacing the -01-01
      // in the date to -12-31
      const monthInd = item.val.indexOf('-');
      const firstPart = item.val.substring(0, monthInd);
      const secondPart = item.val.substring(monthInd + 6);

      const periodEnd = formatDate(
        firstPart.concat('-12-31').concat(secondPart)
      );

      // we get the incomind funds
      const incFunds = formatValue(item.incom_funds.trans_currency, defCurreny);

      const incFundsValue = incFunds.value;
      defCurreny = incFunds.currency;

      // we get the disbursments and expenditures summed up
      const disbsExp = formatValue(
        item.disbs_expends.trans_currency,
        defCurreny
      );

      const disbsExpValue = disbsExp.value;
      defCurreny = disbsExp.currency;

      let rating = 'No Data';
      // and here we get the rating based on the two values
      // the rating is going to be the percentage of available funds
      // cause no clear indication has been provided about what this
      // percentage should be
      if (incFundsValue && disbsExpValue) {
        // and since data is very crazy
        // we will check which one is bigger
        // the incoming funds or disbs and exps
        // if incoming funds is bigger we'll treat
        // rating as a + percentage
        // otherwise we treat it as a - percentage
        let diff = 0;
        let percentage = 0;
        if (incFundsValue > disbsExpValue) {
          diff = incFundsValue - disbsExpValue;
          percentage = (100 * diff) / incFundsValue;
          rating = `${percentage} %`;
        } else if (incFundsValue < disbsExpValue) {
          diff = disbsExpValue - incFundsValue;
          percentage = (100 * diff) / disbsExpValue;
          rating = `-${percentage} %`;
        } else {
          // if they're equal the rating will stay as 0 %
          rating = `${percentage} %`;
        }
      }

      // and finally we push the item!
      tableData.push([
        periodStart,
        periodEnd,
        incFundsValue ? [incFundsValue, defCurreny] : null,
        disbsExpValue ? [disbsExpValue, defCurreny] : null,
        rating,
      ]);
    });
  }

  return tableData;
}
