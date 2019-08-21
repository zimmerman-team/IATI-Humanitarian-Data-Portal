import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';

// App Bar Pages
import { About } from 'app/modules/about';
import { Faqs } from 'app/modules/faqs';
import { Landing } from 'app/modules/landing';
import { SignatoryData } from 'app/modules/signatory-data';

// Signatory Data Sub Pages
import { Overview } from 'app/modules/signatory-data/submodules/overview';
import { ActivityList } from 'app/modules/signatory-data/submodules/activityList';
import { SignatoryIncoming } from 'app/modules/signatory-data/submodules/incoming';
import { ProvidersPage } from 'app/modules/signatory-data/submodules/providersPage';
import { SignatoryOutgoing } from 'app/modules/signatory-data/submodules/outgoing';
import { Recipients } from 'app/modules/signatory-data/submodules/recipients';
import { Timelines } from 'app/modules/signatory-data/submodules/timelines';
import { ActivityListDetails } from 'app/modules/signatory-data/submodules/activityListDetails';

// Signatory Progress Sub Pages
import { CCTRI } from 'app/modules/signatory-progress/submodules/CCTRI';
import { SignatoryProgress } from 'app/modules/signatory-progress';

function Routes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* App Bar */}
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/faq" render={() => <Faqs />} />
        <Route exact path="/signatory-data" render={() => <SignatoryData />} />
        {/*TODO: im missing!*/}
        <Route
          exact
          path="/signatory-progress"
          render={() => <SignatoryProgress />}
        />


        {/* Signatory Progress Sub Pages*/}
        <Route
          exact
          path="/signatory-progress/cctri-target"
          render={() => <CCTRI />}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
