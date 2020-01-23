import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { SignatoryNavigation } from './index';
import { SubNavItemRegularMock } from './mock';
import { Box, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

storiesOf('Navigation|Signatory Navigation', module).add(
  'Signatory Navigation',
  () => (
    <Providers>
      <SignatoryNavigation items={SubNavItemRegularMock.items} />
      <Box width="100%" height="120px" color="#123123" />
    </Providers>
  )
);
