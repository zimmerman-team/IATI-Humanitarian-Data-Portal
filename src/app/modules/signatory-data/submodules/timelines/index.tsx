import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { TimelinesLayout } from './layout';

/* store */
import { timeStore } from './store';

/* consts */
import { timlagQuery } from './const';

/* utils */
import get from 'lodash/get';
import { formatTimeTable } from './utils/formatTimeTable';

function TimelinesF(props) {
  const [state, actions] = timeStore();

  useEffect(() => {
    actions.timeLag.fetch({
      values: timlagQuery(decodeURIComponent(props.match.params.code)),
    });
  }, []);

  const timelagData = get(
    state.timeLag,
    'data.data.facets.monthly_transactions.buckets',
    null
  );

  return <TimelinesLayout timelagData={formatTimeTable(timelagData)} />;
}

export const Timelines = withRouter(TimelinesF);
