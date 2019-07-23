import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '.';
import { PageLayout } from './layout';

storiesOf('Modules|Page', module).add('Page - container', () => (
  <>
    <Page />
  </>
));

storiesOf('Modules|Page', module).add('Page - layout', () => (
  <>
    <PageLayout />
  </>
));
