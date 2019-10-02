import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import React from 'react';
import { SimpleHeader } from './index';

storiesOf('Components', module).add('Simple Header', () => (
  <>
    <Providers>
      <SimpleHeader
        title="Specific Results"
        description="Support drought affected communities to access essential food support By improving the immediate food security of vulnerable households School feeding Support drought affected communities to access potable water ActionAid s activities will include water point s rehabilitation and maintenance de silting of pans as above provision of storage tanks and trucking Support women and girls protection in emergencies ActionAid will build capacity of women affected by the drought to develop community based protection plans Also to enhance protection spaces will be created to actively involve them in the design and implementation of women led local level protection responses provide psychosocial counselling to women affected by GBV and provide support and linkages to referral mechanisms and institutions including medical and legal support Safe spaces in schools through the girls forums and at food and water distribution points for women will be utilized Dignity kits to affected women and girls will be provided Strengthen accountability in the drought response AA realize the important role that participation and inclusion information sharing complaints and resolution mechanism and holding others to account plays in promoting accountability in delivery of emergency response"
      />
    </Providers>
  </>
));
