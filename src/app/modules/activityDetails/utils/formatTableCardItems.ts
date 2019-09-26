/* models/interfaces */
import { ListCellModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';
import {
  BaseItem,
  PeriodItem,
  PerTargActItem,
  ResIndItem,
  ResultItem,
} from '../../ResultDetails/store/interface';

/* utils */
import get from 'lodash/get';
import { formatMoney } from 'app/components/datadisplay/Table/helpers';
import { getNarrativeText } from 'app/utils/generic';

interface KeyItemModel {
  key: string;
  codeNames?: object;
  // key of external link
  extLink?: string;
  intLink?: string;
  intLinkForm?: string;
  suffix?: string;
  narrative?: boolean;
  value?: boolean;
  arrayKey?: string;
  emptyValString?: string;
}

export function formatTableCardItems(
  actDetail:
    | SingleDefActivity
    | ResultItem
    | ResIndItem
    | BaseItem
    | PerTargActItem
    | PeriodItem,
  field: string,
  keyFields: KeyItemModel[],
  doubleArray?: boolean,
  // this gets pushed in as the first column
  extraCol?: string
): ListCellModel[][] {
  const tableRows: ListCellModel[][] = [];

  const actField = get(actDetail, field) || [];

  actField.forEach(fItem => {
    const listRow: ListCellModel[] = [];
    keyFields.forEach(fkey => {
      let keyVal = get(fItem, fkey.key, null);

      if (doubleArray) {
        // ye so because the response structure is bad
        // it uses double arrays for no reason
        // we need to use the first arrays items key
        keyVal = get(fItem, `[0]${fkey.key}`, null);
      }

      let value = keyVal || 'No Data';

      if (keyVal) {
        if (fkey.key.indexOf('narrative') !== -1 || fkey.narrative) {
          // we get the english narrative
          value = getNarrativeText(keyVal);
        }

        if (fkey.value) {
          value = formatMoney(value.value, value.currency);
        }

        if (fkey.codeNames) {
          value = fkey.codeNames[value];
        }

        if (fkey.suffix) {
          value += fkey.suffix;
        }

        // so if fkey has the arrayKey element that means that
        // its an array of values which need to be added to one string
        // by the specified arrayKey item in the array
        if (fkey.arrayKey) {
          value = keyVal
            .map(item => fkey.arrayKey && item[fkey.arrayKey])
            .join(', ');
        }
      }

      if (fkey.emptyValString && value === 'No Data') {
        value = fkey.emptyValString;
      }

      const cellItem: ListCellModel = {
        value,
      };

      if (fkey.extLink && keyVal) {
        cellItem.link = get(fItem, fkey.extLink, '#');
        cellItem.extLink = true;
      }

      if (fkey.intLink && fkey.intLinkForm && fItem[fkey.intLink]) {
        cellItem.link = fkey.intLinkForm.replace('{id}', fItem[fkey.intLink]);
      }

      listRow.push(cellItem);
    });
    if (extraCol) {
      listRow.unshift({
        value: extraCol,
      });
    }

    tableRows.push(listRow);
  });

  return tableRows;
}
