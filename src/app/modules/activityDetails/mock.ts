// Models
import { mockData as ActivityDetailsHeaderCardMockData } from 'app/components/surfaces/Cards/ActivityDetailsHeaderCard/mock';
import { mockDataVar6 } from 'app/components/datadisplay/Table/mock';
import { mockData as inPageNavigationMockData } from 'app/components/navigation/InPageNavigation/mock';
import {
  listCellItems,
  listMockData,
  listMockData2,
} from 'app/components/datadisplay/Lists/mock';

// Mock data
import { ActivityDetailModel } from './model';

export const mockData: ActivityDetailModel = {
  header: ActivityDetailsHeaderCardMockData,
  sections: [
    {
      title: 'Description',
      content:
        'The POWER project is a five year initiative 2016 2020 Its overall objective is to increase the income and the ability to control this income of 19 501 rural women in Bangladesh Ghana and Rwanda POWER was also implemented in Pakistan between 2016 2018 The targets have been updated following the closure of the Pakistan office previous targets can be found on the Original logframe and the actual numbers achieved by ActionAid Pakistan can be found on the POWER 2018 Annual Report',
    },
    {
      title: 'Results',
      content:
        'Support drought affected communities to access essential food support By improving the immediate food security of vulnerable households School feeding Support drought affected communities to access potable water ActionAid s activities will include water point s rehabilitation and maintenance de silting of pans as above provision of storage tanks and trucking Support women and girls protection in emergencies ActionAid will build capacity of women affected by the drought to develop community based protection plans Also to enhance protection spaces will be created to actively involve them in the design and implementation of women led local level protection responses provide psychosocial counselling to women affected by GBV and provide support and linkages to referral mechanisms and institutions including medical and legal support Safe spaces in schools through the girls forums and at food and water distribution points for women will be utilized Dignity kits to affected women and girls will be provided Strengthen accountability in the drought response AA realize the important role that participation and inclusion information sharing complaints and resolution mechanism and holding others to account plays in promoting accountability in delivery of emergency response.',
    },
  ],
  incomingTransactionsTableData: mockDataVar6,
  outgoingTransactionsTableData: mockDataVar6,
  inPageNavigation: inPageNavigationMockData,
  lists: [
    {
      title: listMockData.title,
      items: listMockData.items,
    },
    {
      title: listMockData2.title,
      items: listMockData2.items,
    },
    {
      title: listCellItems.title,
      type: 'ExpTableCard',
      tableCItems: listCellItems.tableCItems,
    },
  ],
};
