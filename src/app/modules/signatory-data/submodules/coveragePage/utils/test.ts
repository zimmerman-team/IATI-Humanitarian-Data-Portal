import { CovTimeItemModel, OrgTotExpItemModel } from '../store/interfaces';

/* utils */
import get from 'lodash/get';
import { formatDate } from 'app/utils/generic';

interface DateItemModel {
  startDate: string;
  endDate: string;
}

// specific helper function to get the date
// from facet key, according to the way
// the facet keys are formed in 'formatTransFacets' function
// function getDatefKey(key:string): DateItemModel{
//   return {
//
//   }
// }

function formatCovData(
  covData: CovTimeItemModel[] | null,
  covOrgData: OrgTotExpItemModel[] | null,
  defCurr: string | null
): Array<Array<string | number | null | Array<string | number | null>>> {
  const tableData: Array<
    Array<string | number | null | Array<string | number | null>>
  > = [];

  // TODO: Continue here
  if (covData) {
    Object.entries(covData).forEach(covItem => {
      const covKey = covItem[0];
      const covValue = covItem[1];
      const opFunds: string | null = null;
      const disbsExpValue: string | null = null;
      const rating = 'No Data';
      // specific way to get the start and end date from the facet keys
      // according to how they are formed in 'formatTransFacets' function
      const startDate = covKey.substring(10, 20);
      const endDate = covKey.substring(31, 41);

      // tableData.push([
      //   formatDate(transPerStart.format()),
      //   formatDate(transPerEnd.format()),
      //   opFunds,
      //   disbsExpValue,
      //   rating,
      // ]);
    });
  }

  const defCurreny: string =
    defCurr || get(covData, '[0].trans_currency.buckets[0].val', 'USD');

  return tableData;
}
