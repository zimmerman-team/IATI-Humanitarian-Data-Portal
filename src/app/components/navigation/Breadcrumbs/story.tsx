import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { BreadCrumbs } from './index';
import { currentLocation, previousLocations} from './mock';

storiesOf('Navigation|Breadcrumbs', module).add('Breadcrumbs', () => (
  <Providers>
    <BreadCrumbs currentLocation={currentLocation} previousLocations={previousLocations}/>
  </Providers>
));
