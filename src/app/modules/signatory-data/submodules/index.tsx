import React from 'react';
import { Container } from '@material-ui/core';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';
import Providers from 'app/Providers';
import Overview from 'app/modules/signatory-data/submodules/overview';
import { ProvidersPage } from 'app/modules/signatory-data/submodules/providersPage';
import { Recipients } from 'app/modules/signatory-data/submodules/recipients';
import { SignatoryOutgoing } from 'app/modules/signatory-data/submodules/outgoing';
import { SignatoryIncoming } from 'app/modules/signatory-data/submodules/incoming';
import { CoverageModule } from 'app/modules/signatory-data/submodules/coverage';
import { ActivityList } from 'app/modules/signatory-data/submodules/activityList';
import { ActivityListDetails } from 'app/modules/signatory-data/submodules/activityListDetails';
import { SignatoryDataRoutes } from 'app/modules/signatory-data/submodules/routes';

export function SubmoduleContainer() {
  return (
    <Container maxWidth="lg">
      {/** contains the header that is shown in every submodule */}
      <SubmoduleHeader />
      {/** contains the routes of the submodules of the signatory data */}
      <SignatoryDataRoutes />
    </Container>
  );
}
