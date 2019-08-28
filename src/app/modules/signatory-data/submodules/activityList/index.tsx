import React from 'react';
import { withRouter } from 'react-router';
import { ActivityListLayout } from './layout';
import { mockData } from './mock';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

function ActivityListz(props) {
  const activitiesAction = useStoreActions(actions => actions.activities.fetch);

  const activities = useStoreState(state => state.activities);

  console.log('activities', activities);

  React.useEffect(() => {
    const callValues = {
      values: {
        q: `reporting_org_ref:${props.match.params.code}`,
      },
    };
    activitiesAction(callValues);
  }, []);

  return (
    <ActivityListLayout
      title={mockData.title}
      subtitle={mockData.subtitle}
      activity={mockData.activity}
    />
  );
}

export const ActivityList = withRouter(ActivityListz);
