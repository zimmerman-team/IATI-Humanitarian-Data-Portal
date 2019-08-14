import { ProvidersModel } from './model';
import { mockDataVar4 as mockTable } from 'app/components/datadisplay/Table/mock';
import { mockData as mockBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';

export const mockData: ProvidersModel = {
  activity: {
    name: 'ActionAid UK',
    code: 'GB-CHC-274467',
  },
  barChartData: mockBarChartCard,
  tableData: mockTable,
};
