import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';

/* store */
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from './state/store/hooks';

// App Bar Pages
import { About } from 'app/modules/about';
import { Faqs } from 'app/modules/faqs';
import { Landing } from 'app/modules/landing';
import { SignatoryData } from 'app/modules/signatory-data';

// Signatory Progress Sub Pages
import { CCTRI } from 'app/modules/signatory-progress/submodules/CCTRI';
import { SignatoryProgress } from 'app/modules/signatory-progress';

// Signatory Data Sub Pages
import { SubmoduleContainer } from './modules/signatory-data/submodules';
import { ActivityDetails } from './modules/activityDetails';
import { PrivacyModule } from 'app/modules/privacy';
import { ResultDetail } from './modules/ResultDetails';

/* utils */
import { InitialDataLoad } from './utils/initialLoad';

export function Routes() {
  InitialDataLoad();

  const tableOptions = useStoreState(state => state.sigDataOpts);

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* App Bar */}
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/faq" render={() => <Faqs />} />
        <Route
          exact
          path="/signatory-data"
          render={() => <SignatoryData tableOptions={tableOptions} />}
        />
        <Route
          path="/signatory-data/:code"
          render={props => <SubmoduleContainer {...props} />}
        />
        {/*TODO: im missing!*/}
        <Route
          exact
          path="/signatory-progress"
          render={() => <SignatoryProgress />}
        />

        {/* Signatory Progress Sub Pages */}
        <Route
          exact
          path="/signatory-progress/cctri-target"
          render={() => <CCTRI />}
        />

        <Route
          exact
          path="/activity-detail/:code"
          render={() => <ActivityDetails />}
        />

        <Route exact path="/privacy" render={() => <PrivacyModule />} />
        <Route
          exact
          path="/result-detail/:code"
          render={() => <ResultDetail />}
        />

        {/* Signatory Data Container*/}
        {/* <SubmoduleContainer /> */}
      </Switch>
    </Suspense>
  );
}
