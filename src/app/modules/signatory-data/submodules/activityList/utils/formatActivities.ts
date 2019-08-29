import { ActivityResponse } from 'app/state/api/interfaces/activityInterface';

/* utils */
import find from 'lodash/find';

/* consts */
import { statusNames } from '../const';
import { shortMonthNames } from 'app/__consts__/dates';

export function formatActivities(
  activities: ActivityResponse | null
): Array<Array<string | Array<string>>> {
  const tableData: Array<Array<string | Array<string>>> = [];

  if (activities) {
    const data = activities.response.docs;

    data.forEach(activity => {
      let actualStart = '';
      let actualEnd = '';

      // so here we'll get the actual start
      // and end dates of the activity
      // the actual start date is of type code 2
      // and the actual end is of type code 4
      // reference - http://reference.iatistandard.org/203/codelists/ActivityDateType/
      // and because activity date types and iso date array
      // array indexes correspond to each other, we will
      // use date type indexes to get the dates
      const actualStartIndex = activity.activity_date_type.indexOf('2');
      const actualEndIndex = activity.activity_date_type.indexOf('2');
      if (actualStartIndex !== -1) {
        // and here we format the date
        const tempDate = new Date(
          activity.activity_date_iso_date[actualStartIndex]
        );
        actualStart = `${tempDate.getDate()} ${
          shortMonthNames[tempDate.getMonth()]
        } ${tempDate.getFullYear()}`;
      }
      if (actualEndIndex !== -1) {
        // and here we format the date
        const tempDate = new Date(
          activity.activity_date_iso_date[actualEndIndex]
        );
        actualEnd = `${tempDate.getDate()} ${
          shortMonthNames[tempDate.getMonth()]
        } ${tempDate.getFullYear()}`;
      }

      // we get the english activity title here
      let engTitle = JSON.parse(activity.title[0]);
      const engFound = find(engTitle, ['lang', 'en']);
      engTitle = engFound ? engFound.narrative : engTitle[0].narrative;

      const resultCount = activity.result ? activity.result.length : 0;

      tableData.push([
        actualStart,
        actualEnd,
        statusNames[activity.activity_status_code],
        [activity.iati_identifier, engTitle],
        activity.recipient_country_narrative || [],
        resultCount,
      ]);
    });
  }

  return tableData;
}
