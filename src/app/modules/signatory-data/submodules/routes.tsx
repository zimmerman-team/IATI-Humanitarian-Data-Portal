import React, { Suspense } from 'react';
import { PageLoader } from 'app/modules/common/PageLoader';
import { Route, Switch } from 'react-router';
import { Overview } from 'app/modules/signatory-data/submodules/overview';
import { ActivityList } from 'app/modules/signatory-data/submodules/activityList';
import { SignatoryIncoming } from 'app/modules/signatory-data/submodules/incoming';
import { ProvidersPage } from 'app/modules/signatory-data/submodules/providersPage';
import { SignatoryOutgoing } from 'app/modules/signatory-data/submodules/outgoing';
import { Recipients } from 'app/modules/signatory-data/submodules/recipients';
import { Timelines } from 'app/modules/signatory-data/submodules/timelines';
import { Coverage } from 'app/modules/signatory-data/submodules/coveragePage';

export function SignatoryDataRoutes(props: any) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path="/signatory-data/:code/overview"
          render={() => (
            <Overview
              queryDateField={props.queryDateField}
              suppLink={props.suppLink}
            />
          )}
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
          path="/signatory-data/:code/funders"
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
