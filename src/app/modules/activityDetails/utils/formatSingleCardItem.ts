/* interfaces/models */
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';
import { ListItemModel } from 'app/components/datadisplay/Lists/model';

/* utils */
import get from 'lodash/get';

interface ElementItem {
  key: string;
  label: string;
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
