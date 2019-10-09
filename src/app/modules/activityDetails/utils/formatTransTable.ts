/* consts */
import { shortMonthNames } from 'app/__consts__/dates';

/* models/interfaces */
import { ActTransactionModel } from 'app/modules/activityDetails/store/interface';
import { TableInfoItemModel } from 'app/components/datadisplay/TableWTotal/common/TableInfo/model';

/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { convertHelper } from 'app/utils/currency';
import { formatMoney } from 'app/components/datadisplay/Table/helpers';

const totValKeyBinds = {
  inCom: {
    margin: 'auto 0 auto 136px',
    label: 'Commitment:',
    value: '€000,000,000.00',
  },
  outCom: {
    margin: 'auto 0 auto 136px',
    label: 'Commitment:',
    value: '€000,000,000.00',
  },
  inPledg: {
    margin: 'auto 0 auto 24px',
    label: 'Pledged:',
    value: '€000,000,000.00',
  },
  outPledg: {
    margin: 'auto 0 auto 24px',
    label: 'Pledged:',
    value: '€000,000,000.00',
  },
  funds: {
    margin: 'auto 0 auto 24px',
    label: 'Funds:',
    value: '€000,000,000.00',
  },
  disb: {
    margin: 'auto 0 auto 24px',
    label: 'Disbursements:',
    value: '€000,000,000.00',
  },
  exp: {
    margin: 'auto 0 auto 24px',
    label: 'Expenditures:',
    value: '€000,000,000.00',
  },
  tot: {},
};

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

  const infoItems: TableInfoItemModel[] = [];

  let defCurr = defCurreny;

  totValKeyBinds.tot = {
    margin: 'auto 32px auto auto',
    label: 'Total:',
    value: '€000,000,000.00',
  };

  const totValues = {
    inCom: 0,
    outCom: 0,
    inPledg: 0,
    outPledg: 0,
    funds: 0,
    disb: 0,
    exp: 0,
    tot: 0,
  };

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

      const value = convertHelper(
        get(trans, 'transaction_value', 0),
        get(trans, 'transaction_value_currency'),
        defCurr
      );

      if (value) {
        switch (trans.transaction_type) {
          case '1':
            totValues.funds += value[0];
            totValues.tot += value[0];
            break;
          case '2':
            totValues.outCom += value[0];
            totValues.tot += value[0];
            break;
          case '3':
            totValues.disb += value[0];
            totValues.tot += value[0];
            break;
          case '4':
            totValues.exp += value[0];
            totValues.tot += value[0];
            break;
          case '11':
            totValues.inCom += value[0];
            totValues.tot += value[0];
            break;
          case '12':
            totValues.outPledg += value[0];
            totValues.tot += value[0];
            break;
          case '13':
            totValues.inPledg += value[0];
            totValues.tot += value[0];
            break;
        }
      }

      tableData.push([
        formattedDate,
        trans.transaction_provider_org_narrative || 'no data',
        trans.transaction_receiver_org_narrative || 'no data',
        transTName ? transTName.name : 'no data',
        value ? [value[1], value[0]] : null,
        traceId || 'no data',
      ]);
    });
  }

  Object.entries(totValues).forEach(item => {
    if (item[1] !== 0 && defCurr) {
      const infoItem = totValKeyBinds[item[0]];
      infoItem.value = formatMoney(item[1], defCurr);
      if (infoItems.length === 0) {
        infoItem.margin = 'auto 0 auto 136px';
      }
      infoItems.push(infoItem);
    }
  });

  return {
    data: tableData,
    infoItems,
  };
}
