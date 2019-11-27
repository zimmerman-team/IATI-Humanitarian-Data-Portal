import { RecipientsModel } from 'app/modules/signatory-data/submodules/recipients/model';
import { mockDataVar4 as mockTable } from 'app/components/datadisplay/Table/mock';
import { mockData as mockBarChartCard } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';

export const mockData: RecipientsModel = {
  barChartData: mockBarChartCard,
  tableData: mockTable,
  loading: false,
};
