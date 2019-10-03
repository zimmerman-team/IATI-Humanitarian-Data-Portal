import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* utils */
import { formatDate, getEngText } from 'app/utils/generic';
import get from 'lodash/get';
import find from 'lodash/find';

export function formatActivities(
  actStatusCodeList,
  activities?: SingleDefActivity[]
): Array<Array<string | Array<string>>> {
  const tableData: Array<Array<string | Array<string>>> = [];

  if (activities) {
    activities.forEach(activity => {
      // we get the english activity title here
      const engTitle = getEngText(get(activity, 'title[0]', '""'));

      const resultCount = activity.result_type
        ? activity.result_type.length
        : 0;

      const statusName = find(actStatusCodeList, [
        'code',
        activity.activity_status_code,
      ]);
      tableData.push([
        formatDate(activity.activity_date_start_actual),
        formatDate(activity.activity_date_end_actual),
        statusName ? statusName.name : 'no data',
        [activity.iati_identifier, engTitle],
        activity.recipient_country_name || [],
        resultCount,
      ]);
    });
  }

  return tableData;
}
