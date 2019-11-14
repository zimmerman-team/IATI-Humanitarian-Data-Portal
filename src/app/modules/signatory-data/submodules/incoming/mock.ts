import { mockData as inPageNavMockData } from 'app/components/navigation/InPageNavigation/mock';
import { listMockData } from 'app/components/datadisplay/Lists/mock';
import { mockData as horizontalBarChartCardMockData } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';
import { IncomingModel } from 'app/modules/signatory-data/submodules/incoming/model';

export const mockData: IncomingModel = {
  horizontalBarChartCardData: horizontalBarChartCardMockData,
  inPageNavigation: inPageNavMockData,
  lists: [
    {
      title: listMockData.title,
      elName: 'summary',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      elName: 'summary',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      elName: 'summary',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      elName: 'summary',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
  ],
};
