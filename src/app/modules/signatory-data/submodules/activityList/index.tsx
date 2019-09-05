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
  console.log('process.env.REACT_APP_PROD', process.env.REACT_APP_PROD);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  const activitiesAction = useStoreActions(actions => actions.activities.fetch);
  const actState: any = useStoreState(state => state.activities.data);
  const activities = actState ? actState.data.response : {};

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

  activityBaseTable.data = formatActivities(activities.docs);
  activityBaseTable.options.count = activities.numFound;
  activityBaseTable.options.onChangePage = setPage;
  activityBaseTable.options.onChangeRowsPerPage = setRows;

  return <ActivityListLayout activity={activityBaseTable} />;
}

export const ActivityList = withRouter(ActivityListz);
