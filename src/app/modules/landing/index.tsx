import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Grid, Row } from 'react-styled-flexboxgrid';
import { LandingLayout } from 'app/modules/landing/layout';
import { signatoryDataMock } from '../signatory-data/mock';
import useTitle from 'react-use/lib/useTitle';
import { DebugBox } from 'app/utils/layout';

function Landing() {
  useTitle(`MLT - Home`);

  return <LandingLayout />;
}
