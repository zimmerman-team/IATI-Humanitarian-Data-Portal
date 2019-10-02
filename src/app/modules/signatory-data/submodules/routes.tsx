import React, { Suspense } from 'react';
import { PageLoader } from 'app/modules/common/PageLoader';
import { Route, Switch } from 'react-router';
import { Overview } from 'app/modules/signatory-data/submodules/overview';
import { ActivityList } from './activityList';
import { SignatoryIncoming } from './incoming';
import { ProvidersPage } from './providersPage';
import { SignatoryOutgoing } from './outgoing';
import { Recipients } from './recipients';
import { Timelines } from './timelines';
import { Coverage } from './coveragePage';

export function SignatoryDataRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path="/signatory-data/:code/overview"
          render={() => <Overview />}
        />
        <Route
          exact
          path="/signatory-data/:code/activity-list"
          render={() => <ActivityList />}
        />
        <Route
          exact
          path="/signatory-data/:code/incoming"
          render={() => <SignatoryIncoming />}
        />
        <Route
          exact
          path="/signatory-data/:code/providers"
          render={() => <ProvidersPage />}
        />
        <Route
          exact
          path="/signatory-data/:code/outgoing"
          render={() => <SignatoryOutgoing />}
        />
        <Route
          exact
          path="/signatory-data/:code/recipients"
          render={() => <Recipients />}
        />
        <Route
          exact
          path="/signatory-data/:code/timeliness"
          render={() => <Timelines />}
        />
        {/*TODO: im missing!*/}
        <Route
          exact
          path="/signatory-data/:code/coverage"
          render={() => <Coverage />}
        />
      </Switch>
    </Suspense>
  );
}
