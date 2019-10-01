/* consts */
import { shortMonthNames } from 'app/__consts__/dates';

/* models/interfaces */
import { ActTransactionModel } from '../store/interface';

/* utils */
import get from 'lodash/get';
import find from 'lodash/find';

export function formatTransTable(
  transData: ActTransactionModel[] | null,
  incoming: boolean,
  transTypeNames
): Array<Array<string | number | undefined | Array<string | number>>> {
  const tableData: Array<
    Array<string | number | undefined | Array<string | number>>
  > = [];

  if (transData) {
    transData.forEach(trans => {
      const tempDate = new Date(trans.transaction_date_iso_date);
      const formattedDate = `${tempDate.getDate()}. ${
        shortMonthNames[tempDate.getMonth()]
      }-${tempDate.getFullYear()}`;

      const traceId = incoming
        ? trans.transaction_provider_org_provider_activity_id
        : trans.transaction_receiver_org_receiver_activity_id;

      const transTName = find(transTypeNames, ['code', trans.transaction_type]);

      tableData.push([
        formattedDate,
        trans.transaction_provider_org_narrative || 'No Data',
        trans.transaction_receiver_org_narrative || 'No Data',
        transTName ? transTName.name : 'No Data',
        [
          get(trans, 'transaction_value_currency', 'USD'),
          get(trans, 'transaction_value', 0),
        ],
        traceId || 'No Data',
      ]);
    });
  }
  return tableData;
}
