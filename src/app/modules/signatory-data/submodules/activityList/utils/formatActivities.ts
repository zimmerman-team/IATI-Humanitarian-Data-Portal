import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* utils */
import { getActualDates, getEngText } from 'app/utils/generic';

/* consts */
import { actStatusNames } from 'app/__consts__/iati_standard_code_names';

export function formatActivities(
  activities?: SingleDefActivity[]
): Array<Array<string | Array<string>>> {
  const tableData: Array<Array<string | Array<string>>> = [];

  if (activities) {
    activities.forEach(activity => {
      const dates = getActualDates(
        activity.activity_date_iso_date,
        activity.activity_date_type
      );

      // we get the english activity title here
      const engTitle = getEngText(activity.title[0]);

      const resultCount = activity.result ? activity.result.length : 0;

      tableData.push([
        dates.actualStart,
        dates.actualEnd,
        actStatusNames[activity.activity_status_code],
        [activity.iati_identifier, engTitle],
        activity.recipient_country_narrative || [],
        resultCount,
      ]);
    });
  }

  return tableData;
}
