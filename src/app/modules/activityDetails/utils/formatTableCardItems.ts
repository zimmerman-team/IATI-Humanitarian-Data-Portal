/* models/interfaces */
import { ListCellModel } from 'app/components/datadisplay/Lists/common/SimpleListItem/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

export function formatTableCardItems(
  actDetail: SingleDefActivity,
  field: string,
  keyFields: string[]
): ListCellModel[][] {
  const tableRows: ListCellModel[][] = [];
  if (actDetail[field]) {
    actDetail[field].forEach(fItem => {});
  }
  return tableRows;
}
