import { SignatoryProgressModel } from './model';
import { mockData as lineChartCardMockData } from 'app/components/surfaces/Cards/LineChartCard/mock';
import { mockData as horizontalBarChartCardMockData } from 'app/components/surfaces/Cards/HorizontalBarChartCard/mock';
import { mockDataVar1 as tableMock } from 'app/components/datadisplay/Table/mock';

export const SignatoryProgressMock: SignatoryProgressModel = {
  title: 'Aggregated signatory progress',
  description:
    '<p>The Grand Bargain transparency workstream uses the following IATI publishing indicators for the workstream <a href="/signatory-progress/cctri-target">Core Commitment Target Results & Indicators (CCTRIs).</a>The aim of these indicators is to track the improvement in the quality and usability of the IATI data published by the Grand Bargain signatories.</p>',
  lineChartCardData: lineChartCardMockData,
  horizontalBarChartCardData: horizontalBarChartCardMockData,
  tableChartData: tableMock,
};
