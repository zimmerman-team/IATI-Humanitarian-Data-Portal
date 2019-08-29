/* interfaces/models */
import { ActivityDetailsHeaderCardModel } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/model';
import { ActMetadataModel } from '../store/interface';

/* utils */
import { getActualDates, getEngText } from 'app/utils/generic';

export function formatHeader(
  actDetail: ActMetadataModel | null
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
    header.organisation.name = actDetail.reporting_org_narrative[0];
    header.organisation.code = actDetail.reporting_org_ref;
    header.activity.code = actDetail.iati_identifier;
    header.activity.title = getEngText(actDetail.title[0]);
    const dates = getActualDates(
      actDetail.activity_date_iso_date,
      actDetail.activity_date_type
    );
    header.activity.startDate = dates.actualStart;
    header.activity.endDate = dates.actualEnd;
  }

  return header;
}
