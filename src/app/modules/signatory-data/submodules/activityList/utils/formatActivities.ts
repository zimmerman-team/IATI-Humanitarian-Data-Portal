import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* utils */
import { formatDate, getEngText } from 'app/utils/generic';
import get from 'lodash/get';

/* consts */
import { actStatusNames } from 'app/__consts__/iati_standard_code_names';

export function formatActivities(
  activities?: SingleDefActivity[]
): Array<Array<string | Array<string>>> {
  const tableData: Array<Array<string | Array<string>>> = [];

  if (activities) {
    activities.forEach(activity => {
      // we get the english activity title here
      const engTitle = getEngText(get(activity, 'title[0]', '""'));

      const resultCount = activity.result ? activity.result.length : 0;

      tableData.push([
        formatDate(activity.activity_date_start_actual),
        formatDate(activity.activity_date_end_actual),
        actStatusNames[activity.activity_status_code],
        [activity.iati_identifier, engTitle],
        activity.recipient_country_name || [],
        resultCount,
      ]);
    });
  }

  return tableData;
}
