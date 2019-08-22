import React from 'react';
import { Container } from '@material-ui/core';
import { SubmoduleHeader } from 'app/modules/signatory-data/submodules/common/signatory-data-header';
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
