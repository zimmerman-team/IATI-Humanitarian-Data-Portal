import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* utils */
import { formatDate, getEngText } from 'app/utils/generic';
import get from 'lodash/get';
import find from 'lodash/find';

export function formatActivities(
  actStatusCodeList,
  countryCodeList,
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

      const countryNames =
        activity.recipient_country_code &&
        activity.recipient_country_code.map(countryCode => {
          const countName = find(countryCodeList, ['code', countryCode]);
          if (countName) {
            return countName.name;
          }
          return '';
        });
      const startDate = activity.activity_date_start_actual
        ? activity.activity_date_start_actual
        : activity.activity_date_start_planned;

      const endDate = activity.activity_date_end_actual
        ? activity.activity_date_end_actual
        : activity.activity_date_end_planned;

      tableData.push([
        formatDate(startDate),
        formatDate(endDate),
        statusName ? statusName.name : 'no data',
        [activity.iati_identifier, engTitle],
        countryNames || [],
        resultCount > 0
          ? { value: resultCount, activityId: activity.iati_identifier }
          : resultCount,
      ]);
    });
  }

  return tableData;
}
