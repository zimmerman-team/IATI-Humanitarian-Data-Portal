/* interfaces/models */
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';
import { SingleDefActivity } from 'app/state/api/interfaces/activityInterface';

/* utils */
import { getActualDates, getEngText } from 'app/utils/generic';
import get from 'lodash/get';

export function formatHeader(
  actDetail: SingleDefActivity | null
): ActivityDetailsHeaderCardModel {
  const header = {
    organisation: {
      name: '',
      code: '',
    },
    activity: {
      title: '',
      code: '',
      startDate: '',
      endDate: '',
    },
  };

  if (actDetail) {
    header.organisation.name = get(actDetail, 'reporting_org_narrative[0]', '');
    header.organisation.code = actDetail.reporting_org_ref;
    header.activity.code = actDetail.iati_identifier;
    header.activity.title = getEngText(get(actDetail, 'title[0]', '""'));
    const dates = getActualDates(
      get(actDetail, 'activity_date_iso_date', []),
      get(actDetail, 'activity_date_type', [])
    );
    header.activity.startDate = dates.Start ? dates.Start : "No start date provided";
    header.activity.endDate = dates.End ? dates.End : "No end date provided";
  }

  return header;
}
