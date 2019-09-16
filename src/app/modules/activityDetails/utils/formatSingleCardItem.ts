/* interfaces/models */
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';

/* utils */
import get from 'lodash/get';

interface ElementItem {
  key: string;
  label: string;
  arrayKey?: string;
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
      value = 'No Data';
    } else if (element.arrayKey) {
      value = value
        .map(arrVal => element.arrayKey && arrVal[element.arrayKey])
        .join(', ');
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
