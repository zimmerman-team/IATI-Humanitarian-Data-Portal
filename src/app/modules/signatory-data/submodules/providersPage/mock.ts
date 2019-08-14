import { ProvidersPageModel } from './model';
import { mockDataVar4 as mockTable } from 'app/components/datadisplay/Table/mock';
import { mockData as mockBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';

export const mockData: ProvidersPageModel = {
  activity: {
    name: 'ActionAid UK',
    code: 'GB-CHC-274467',
  },
  barChartData: mockBarChartCard,
  tableData: mockTable,
};
