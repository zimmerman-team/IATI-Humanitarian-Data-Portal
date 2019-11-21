import React from 'react';
import { storiesOf } from '@storybook/react';
import { DotsSM } from 'app/components/svgs/BackgroundDots/DotsSM';
import { DotsMD } from 'app/components/svgs/BackgroundDots/DotsMD';
import { DotsLG } from 'app/components/svgs/BackgroundDots/DotsLG';
import { DotsXL } from 'app/components/svgs/BackgroundDots/DotsXL';
import Providers from 'app/Providers';

storiesOf('svgs', module).add('Background Dots', () => (
  <Providers>
    <DotsSM style={{ fill: 'red' }} />
    <DotsMD />
    <DotsLG />
    <DotsXL />
  </Providers>
));
