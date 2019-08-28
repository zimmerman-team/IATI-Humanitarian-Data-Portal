import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { ActivityListLayout } from './layout';

/* store */
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

/* consts */
import { activitiesQuery, activityBaseTable } from './const';

/* utils */
import { formatActivities } from './utils/formatActivities';
import get from 'lodash/get';

function ActivityListz(props) {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  const activitiesAction = useStoreActions(actions => actions.activities.fetch);

  useEffect(() => {
    activitiesQuery.q = activitiesQuery.q.replace(
      '{rep_org_val}',
      props.match.params.code
    );

    activitiesAction({
      values: {
        ...activitiesQuery,
        rows,
        start: page * rows,
      },
    });
  }, [page, rows]);

  const activities: any = useStoreState(state => state.activities.data);
  const activityCount = activities ? activities.data.response.numFound : 0;

  activityBaseTable.data = formatActivities(get(activities, 'data', null));
  activityBaseTable.options.count = activityCount;
  activityBaseTable.options.onChangePage = setPage;
  activityBaseTable.options.onChangeRowsPerPage = setRows;

  return <ActivityListLayout activity={activityBaseTable} />;
}

export const ActivityList = withRouter(ActivityListz);
