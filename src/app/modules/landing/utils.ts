/* core */
import get from 'lodash/get';
import filter from 'lodash/filter';

/* data & model */
import { mockData } from 'app/modules/landing/common/StatContainer/mock';
import { StatModel } from 'app/modules/landing/common/StatContainer/models';

export const getStatsFromApiResponses = (
  humanitarian,
  gbsignatories
): StatModel[] => {
  const stats = [...mockData.items];
  stats[0].value = get(gbsignatories, 'data.length', 0);
  stats[1].value = filter(
    gbsignatories.data,
    item => get(item, 'IATIOrgRef', '') !== ''
  ).length;
  stats[2].value = get(
    humanitarian,
    'data.data.facet_counts.facet_fields.reporting_org_ref.length',
    0
  );
  return stats;
};
