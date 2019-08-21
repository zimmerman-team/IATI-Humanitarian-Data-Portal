// core
import React from 'react';
import { storiesOf } from '@storybook/react';
// utils
import { DebugBox, OutlineBox } from 'app/utils/layout';
import Providers from 'app/Providers';
// comps
import { SubmoduleContainer } from '.';

storiesOf('Modules|Page', module).add('Page - Submodule container', () => (
  <>
    <Providers>
      <SubmoduleContainer />
    </Providers>
  </>
));
