import { listMockData } from 'app/components/datadisplay/Lists/mock';
import { mockData as horizontalBarChartCardMockData } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';
import { OutgoingModel } from './model';

export const mockData: OutgoingModel = {
  horizontalBarChartCardData: horizontalBarChartCardMockData,
  lists: [
    {
      title: listMockData.title,
      elName: 'incComms',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      elName: 'incComms',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      elName: 'incComms',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
    {
      title: listMockData.title,
      elName: 'incComms',
      subtitle: listMockData.subtitle,
      items: listMockData.items,
    },
  ],
};
