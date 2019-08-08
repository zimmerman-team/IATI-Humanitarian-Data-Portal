import React from 'react';
import { storiesOf } from '@storybook/react';
import { TooltipButton } from './index';
import Providers from 'app/Providers';

storiesOf('Data Display|Tooltip', module).add('Tooltip button', () => (
  <Providers>
    <TooltipButton tip="Each row contains a unique activity. Financial information is aggregated. Budget information is excluded. Other potentially repeating fields (such as sectors) are reported in a single cell, delimited by semi-colons." />
  </Providers>
));
