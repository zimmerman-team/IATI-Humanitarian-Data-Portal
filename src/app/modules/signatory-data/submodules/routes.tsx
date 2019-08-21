import React, { Suspense } from 'react';
import { PageLoader } from 'app/modules/common/PageLoader';
import { Switch, Route } from 'react-router';
import Overview from 'app/modules/signatory-data/submodules/overview';

export function SignatoryDataRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/** routes for submodules to be put here */}
        <Overview />
        {/* <ProvidersPage />*/}
        {/*<Recipients />*/}
        {/* <SignatoryOutgoing />*/}
        {/* <SignatoryIncoming />*/}
        {/*<ActivityListDetails />*/}
        {/*<ActivityList />*/}
        {/*<CoverageModule />*/}
      </Switch>
    </Suspense>
  );
}
