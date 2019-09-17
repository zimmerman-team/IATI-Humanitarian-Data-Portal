/* models/interfaces */
import { ListCellModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* utils */
import find from 'lodash/find';
import get from 'lodash/get';
import { formatMoney } from 'app/components/datadisplay/Table/helpers';

interface KeyItemModel {
  key: string;
  codeNames?: object;
  // key of external link
  extLink?: string;
  suffix?: string;
  narrative?: boolean;
  value?: boolean;
  arrayKey?: string;
}

export function formatTableCardItems(
  actDetail: SingleDefActivity,
  field: string,
  keyFields: KeyItemModel[]
): ListCellModel[][] {
  const tableRows: ListCellModel[][] = [];

  const actField = get(actDetail, field, []);

  actField.forEach(fItem => {
    const listRow: ListCellModel[] = [];
    keyFields.forEach(fkey => {
      const keyVal = get(fItem, fkey.key, null);
      let value = keyVal || 'No Data';

      if (keyVal) {
        if (fkey.key.indexOf('narrative') !== -1 || fkey.narrative) {
          // so if the key that we want to get is
          // actually narrative we will want to
          // get the english narrative if one is provided
          // or otherwise we'll just use the first
          // narrative item
          const engNarr = find(keyVal, ['lang', 'en']);
          if (engNarr) {
            value = engNarr.narrative || engNarr.text || 'No Data';
          } else {
            value =
              get(keyVal, '[0].narrative', null) ||
              get(keyVal, '[0].text', 'No Data');
          }
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

      const cellItem: ListCellModel = {
        value,
      };

      if (fkey.extLink && keyVal) {
        cellItem.link = get(fItem, fkey.extLink, '#');
        cellItem.extLink = true;
      }

      listRow.push(cellItem);
    });
    tableRows.push(listRow);
  });

  return tableRows;
}
