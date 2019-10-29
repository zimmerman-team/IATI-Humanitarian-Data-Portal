import {
  ListItemModel,
  ListModel,
} from 'app/components/datadisplay/Lists/model';

export interface YearBarChartObjectModel {
  year: string;
  Activities: number;
  activitiesAct: number;
  ActivitiesColor: string;
  'Humanitarian Activities': number;
  'Humanitarian ActivitiesColor': string;
}

export interface HumanitarianDonutModel {
  activity: string;
  value: number;
}

export interface OverviewLayoutModel {
  humActFTSData: ListModel;
  humResultsData: ListModel;
  statusData: ListItemModel[];
  activitySummaryData: ListModel;
  financialReportingData: ListModel;
  humActWLocationInfoData: ListModel;
  humActWMultiYearFundData: ListModel;
  humOtherClassOfInterestData: ListModel;
  humActwGBClassificationsData: ListModel;
  activityTimelineData: YearBarChartObjectModel[];
  humanitarianElementsData: HumanitarianDonutModel[];
}
