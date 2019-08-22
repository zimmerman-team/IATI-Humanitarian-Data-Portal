import { mockData as inPageNavMockData } from 'app/components/navigation/InPageNavigation/mock';
import { listMockData } from 'app/components/datadisplay/Lists/mock';
import { mockData as horizontalBarChartCardMockData } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';
import { IncomingModel } from './model';

export const mockData: IncomingModel = {
  activity: {
    name: 'ActionAid UK',
    code: 'GB-CHC-274467',
    date: '2017 - 2019',
  },
  horizontalBarChartCardData: horizontalBarChartCardMockData,
  inPageNavigation: inPageNavMockData,
  lists: [
    {
      title: listMockData.title,
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
  ],
};
