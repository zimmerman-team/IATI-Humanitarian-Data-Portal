/* consts */
import { shortMonthNames } from 'app/__consts__/dates';

/* models/interfaces */
import { ActTransactionModel } from '../store/interface';
import { TableInfoItemModel } from 'app/components/datadisplay/TableWTotal/common/TableInfo/model';

/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { convertHelper } from '../../../utils/currency';

interface TransTableModel {
  data: Array<Array<string | number | undefined | Array<string | number>>>;
  infoItems: TableInfoItemModel[];
}

export function formatTransTable(
  transData: ActTransactionModel[] | null,
  incoming: boolean,
  transTypeNames,
  defCurreny: string | null
): TransTableModel {
  const tableData: Array<
    Array<string | number | undefined | Array<string | number>>
  > = [];

  let defCurr = defCurreny;

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

      if (!defCurr) {
        defCurr = get(trans, 'transaction_value_currency', 'USD');
      }

      let value = get(trans, 'transaction_value', 0);

      // TODO continue from here
      // if()
      // const value = convertHelper;

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

  return {
    data: tableData,
    infoItems: [],
  };
}
