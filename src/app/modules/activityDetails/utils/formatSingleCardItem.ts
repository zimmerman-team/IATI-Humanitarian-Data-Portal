/* interfaces/models */
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';

/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { getNarrativeText } from 'app/utils/generic';

interface ElementItem {
  key: string;
  label: string;
  arrayKey?: string;
  // so these three variables
  // will be used to find certain items in an array
  // this is mainly used for dates
  searchKey?: string;
  searchValue?: string;
  foundKey?: string;
  // this is used to get a name from a
  // code variable according to the passed
  // in codeName object
  codeNames?: object;
  suffix?: string;
}

export function formatSingleCardItem(
  actDetail: SingleDefActivity,
  field: string,
  fieldData: ElementItem[]
): ListItemModel[] {
  const items: ListItemModel[] = [];
  fieldData.forEach(element => {
    let value = get(actDetail, field.concat(element.key));
    if (!value) {
      value = 'no data';
    } else if (element.arrayKey) {
      value = value
        .map(arrVal => element.arrayKey && arrVal[element.arrayKey])
        .join(', ');
    } else if (element.searchKey && element.searchValue && element.foundKey) {
      const foundItem = find(value, [element.searchKey, element.searchValue]);
      if (foundItem) {
        value = foundItem[element.foundKey];
      } else {
        value = 'no data';
      }
    } else if (element.codeNames) {
      value = find(element.codeNames, ['code', value]);
      value = value ? value.name : 'no data';
    }

    if (value !== 'no data' && element.suffix) {
      value += element.suffix;
    }

    if (element.key.indexOf('narrative') !== -1) {
      // we get the english narrative
      value = getNarrativeText(value);
    }

    items.push({
      label: element.label,
      values: [
        {
          qtc: undefined,
          ptc: value,
        },
      ],
    });
  });
  return items;
}
