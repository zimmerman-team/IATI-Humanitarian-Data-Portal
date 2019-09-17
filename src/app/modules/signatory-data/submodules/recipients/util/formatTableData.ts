/* interfaces/models */
import { PivotItemModel } from '../store/interfaces';
import { ExpandedCell } from 'app/components/datadisplay/Table/common/ExpandedRow/model';

/* consts */
import {
  orgTypeNames,
  transTypeNames,
} from 'app/__consts__/iati_standard_code_names';

/* utils */
import get from 'lodash/get';
import { formatMoney } from 'app/components/datadisplay/Table/helpers';

interface TableResult {
  tableData: Array<Array<string | number>>;
  expRowData: ExpandedCell[][][];
}

// here we'll start forming data for the expandable rows for this
// organisation
function formatExpRows(typeItem: PivotItemModel): ExpandedCell[][] {
  // we get the activity items through which we'll loop
  const activities = typeItem.pivot ? typeItem.pivot : [];
  const expRows: ExpandedCell[][] = [];
  activities.forEach(activity => {
    // and because we need to divide the activities
    // by their transaction types we'll loop through the
    // transaction types as well
    const transTypes = get(activity, 'pivot', []);

    transTypes.forEach(transType => {
      const expRowItem: ExpandedCell[] = [];
      // so we push in the activity
      // name(though currently iati_identifier cause we don't have the name
      // of the activity)
      expRowItem.push({
        value: get(
          activity,
          'pivot[0].pivot[0].pivot[0].value',
          'Not Provided'
        ),
        type: 'LinkCellModule',
        link: `/activity-detail/${activity.value || ''}`,
        colSpan: 4,
      });
      // here we push in the transaction amount
      expRowItem.push({
        value: transType.count,
        colSpan: 1,
      });
      const transTypeLabel = transType.value
        ? transTypeNames[transType.value].label
        : 'undefined';
      // here we push in the transaction type name
      expRowItem.push({
        value: transTypeLabel,
        colSpan: 1,
      });
      // here we get the currency of the transaction
      // we take the first element of the currency
      // as we'll not be dividing the transactions
      // by the currency value
      const transCurr = get(transType, 'pivot[0].value', 'USD');
      // and here we get the summed value of the transaction type
      const transTypeValue = transType.stats.stats_fields.transaction_value.sum;
      // and we push it
      expRowItem.push({
        value: formatMoney(transTypeValue, transCurr),
        colSpan: 1,
      });

      expRows.push(expRowItem);
    });
  });

  return expRows;
}

export function formatTableData(recData: PivotItemModel[] | null): TableResult {
  const tableData: Array<Array<string | number>> = [];
  const expRowData: ExpandedCell[][][] = [];

  if (recData) {
    // now if an organisation doesn't have
    // a title or a ref
    // we need to skip it, cause it doesn't exists
    // so we'll use this variable to skip
    // the REALLY non-existant transaction organisation
    let skip = false;
    recData.forEach(recItem => {
      if (recItem.value && skip) {
        skip = false;
      } else if (!recItem.value) {
        skip = true;
      }
      // so because one organisation name
      // can have different org refs
      // according to the data that we get
      // we will be looping through these refs
      // and treating them as different organisations
      // but with the same name
      // and these refs exist on the first
      // pivot array
      const refArr = get(recItem, 'pivot', []);

      refArr.forEach(refItem => {
        if (skip && refItem.value) {
          skip = false;
        }
        if (!skip) {
          // cause apperantly organisation with the
          // same title AND the same ref can have
          // different organisation types,
          // #JustIatiDataUploadeLogic,
          // so we'll treat this as different
          // organisations
          const typeArr = get(refItem, 'pivot', []);
          typeArr.forEach(type => {
            const tableItem: Array<string | number> = [];
            // and here we push in the name of the organisation
            tableItem.push(recItem.value || '');
            // and its ref
            tableItem.push(refItem.value || '');
            // then we push the organisation type
            // it will be the first pivot element
            // and the ref, and it will occur only one time
            const orgTypeCode = type.value ? type.value : 'none';
            tableItem.push(orgTypeNames[orgTypeCode]);
            // here we push the amount of transactions for this organisation
            tableItem.push(type.count);
            // now there will be no transaction types for the organisation
            // itself so we push in an empty value
            tableItem.push('');
            // here we'll get the currency from the first
            // activities transaction valuy currency
            const currency = get(
              type,
              'pivot[0].pivot[0].pivot[0].value',
              'USD'
            );
            // and we get the summed up transaction values
            // for the organisation transactions
            const transValue = type.stats.stats_fields.transaction_value.sum;
            // and finally we push in the formatted currency value
            tableItem.push(formatMoney(transValue, currency));
            // -----------------------------------------------------------------
            const expRows = formatExpRows(type);
            expRowData.push(expRows);
            tableData.push(tableItem);
          });
        }
      });
    });
  }

  return {
    tableData,
    expRowData,
  };
}
